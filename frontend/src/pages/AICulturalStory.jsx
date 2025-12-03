import { useState, useRef, useEffect } from "react";
import { BookOpen, Send, Loader2, Volume2, Square, Settings } from "lucide-react";

export default function AICulturalStory() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Namaste 🙏 Tell me which monastery you want to explore. Example: “Tell me a legend from Rumtek Monastery”.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speed, setSpeed] = useState(1);
  const [downloading, setDownloading] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const chatEndRef = useRef(null);

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      const indianVoice = availableVoices.find((v) => v.lang.includes("en-IN"));
      setSelectedVoice(indianVoice || availableVoices[0] || null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        setInput(voiceText);
        sendMessageFromVoice(voiceText);
      };

      recognition.onend = () => setListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const query = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      const aiMsg = {
        sender: "ai",
        text: data.story || "I couldn't generate a story.",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  const getLastAiMessage = () =>
    [...messages].reverse().find((m) => m.sender === "ai")?.text || "";

  const handleSpeak = () => {
    const text = getLastAiMessage();
    if (!text) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = speed;
    utter.voice = selectedVoice;

    utter.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utter);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleDownloadAudio = async () => {
    const text = getLastAiMessage();
    if (!text) return;

    setDownloading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/story-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      const link = document.createElement("a");
      link.href = data.audioUrl;
      link.download = "story.mp3";
      link.click();
    } catch {}

    setDownloading(false);
  };

  const startListening = () => {
    if (!recognitionRef.current) return;

    setListening(true);
    recognitionRef.current.start();
  };

  const sendMessageFromVoice = async (voiceText) => {
    const userMsg = { sender: "user", text: voiceText };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: voiceText }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { sender: "ai", text: data.story }]);
    } catch {}

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-14">

      <h1 className="text-center text-4xl md:text-5xl font-bold text-red-500 drop-shadow mb-3">
        AI Cultural Storytelling
      </h1>

      <p className="text-center text-gray-400 mb-8">
        Discover mystical legends & monastery stories of Sikkim.
      </p>

      <div className="max-w-3xl mx-auto bg-[#111] border border-gray-800 rounded-2xl shadow-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2 text-gray-300">
            <BookOpen className="text-red-500" />
            <span className="font-medium">Story Mode</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSpeak}
              className="px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition flex items-center gap-2"
            >
              <Volume2 size={18} /> {isSpeaking ? "Replay" : "Speak"}
            </button>

            <button
              onClick={handleStop}
              className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 transition flex items-center gap-2"
            >
              <Square size={16} /> Stop
            </button>

            <button
              onClick={handleDownloadAudio}
              disabled={downloading}
              className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-2 disabled:opacity-40"
            >
              {downloading ? <Loader2 size={16} className="animate-spin" /> : "Download"}
            </button>
          </div>
        </div>

        {/* Voice Options */}
        <div className="bg-[#0d0d0d] border border-gray-800 p-4 rounded-xl mb-6">
          <h3 className="flex items-center gap-2 text-gray-300 font-medium mb-3">
            <Settings size={18} className="text-gray-400" /> Voice Settings
          </h3>

          <label className="text-sm text-gray-400">Voice</label>
          <select
            className="w-full bg-black border border-gray-700 text-gray-200 p-2 rounded-lg mt-1"
            value={selectedVoice?.name}
            onChange={(e) =>
              setSelectedVoice(voices.find((v) => v.name === e.target.value))
            }
          >
            {voices.map((voice, idx) => (
              <option key={idx} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>

          <label className="text-sm text-gray-400 mt-3 block">Speed</label>
          <select
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full bg-black border border-gray-700 text-gray-200 p-2 rounded-lg mt-1"
          >
            <option value="0.8">Slow</option>
            <option value="1">Normal</option>
            <option value="1.3">Fast</option>
          </select>
        </div>

        {/* Chat Window */}
        <div className="h-[60vh] overflow-y-auto px-2 space-y-4 border-t border-gray-800 pt-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] p-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-red-600 text-white rounded-br-none"
                    : "bg-gray-900 border border-gray-700 text-gray-300 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 px-4 py-2 rounded-xl text-gray-300 flex items-center gap-2">
                <Loader2 size={20} className="animate-spin" />
                Thinking…
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="mt-4 flex gap-3">
          <button
            onMouseDown={startListening}
            className={`p-3 rounded-xl ${
              listening ? "bg-red-700 animate-pulse" : "bg-red-600 hover:bg-red-700"
            } text-white`}
          >
            🎤
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask a monastery story..."
            className="flex-1 bg-black border border-gray-700 text-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-red-500"
          />

          <button
            onClick={sendMessage}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
          >
            <Send size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
