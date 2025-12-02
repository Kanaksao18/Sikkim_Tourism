import { useState, useRef, useEffect } from "react";
import { BookOpen, Send, Loader2, Volume2, Square, Settings } from "lucide-react";

export default function AICulturalStory() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Namaste 🙏 Tell me which monastery you want to explore through stories. For example: “Tell me a legend from Rumtek Monastery”.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speed, setSpeed] = useState(1); // default speed
  const [downloading, setDownloading] = useState(false);
const [listening, setListening] = useState(false);
const recognitionRef = useRef(null);

  const chatEndRef = useRef(null);

  // Load available voices on mount
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Auto-select a default Indian English voice if available
      const indianVoice = availableVoices.find((v) =>
        v.lang.includes("en-IN")
      );
      setSelectedVoice(indianVoice || availableVoices[0] || null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);
// Initialize Speech Recognition
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

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
  }
}, []);

  // Auto-scroll chat
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
        text: data.story || "I couldn't generate a story at the moment.",
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  // ======== VOICE NARRATION LOGIC ========
  const getLastAiMessage = () => {
    const reversed = [...messages].reverse();
    return reversed.find((m) => m.sender === "ai")?.text || "";
  };
  const handleDownloadAudio = async () => {
  const text = getLastAiMessage();
  if (!text) {
    alert("No AI story available to convert.");
    return;
  }

  setDownloading(true);

  try {
    const res = await fetch("http://localhost:5000/api/ai/story-audio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (!res.ok || !data.audioUrl) {
      alert(data.message || "Failed to generate audio.");
      setDownloading(false);
      return;
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = data.audioUrl;
    link.download = "monastery-story.mp3";
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    alert("Something went wrong while downloading audio.");
  }

  setDownloading(false);
};

  const handleSpeak = () => {
    const text = getLastAiMessage();
    if (!text) return;

    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support voice narration.");
      return;
    }

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = speed;
    utter.voice = selectedVoice || null;

    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utter);
    setIsSpeaking(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  // ========================================

  const startListening = () => {
  if (!recognitionRef.current) {
    alert("Voice input not supported in this browser.");
    return;
  }

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

    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: data.story || "Story not available." },
    ]);
  } catch (err) {
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: "Error processing voice query." },
    ]);
  }

  setLoading(false);
};

  return (
    <div className="min-h-screen bg-[#F5F1EB] px-6 md:px-20 py-16">
      {/* Page Title */}
      <h1 className="text-center text-4xl md:text-5xl font-serif font-bold text-gray-800">
        AI Cultural Storytelling
      </h1>

      <p className="text-center text-gray-600 text-lg mt-4 mb-8">
        Listen to stories, legends & heritage tales from Sikkim’s monasteries.
      </p>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6 border">

        {/* HEADER + VOICE SETTINGS */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <BookOpen className="text-red-600" />
            <span className="font-medium">Story Mode</span>
          </div>

          <div className="flex gap-3">
            {/* LISTEN */}
            <button
              onClick={handleSpeak}
              className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700 transition"
            >
              <Volume2 size={18} />
              {isSpeaking ? "Replay" : "Listen"}
            </button>

            {/* STOP */}
            <button
              onClick={handleStop}
              className="flex items-center gap-2 bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm hover:bg-gray-300 transition"
            >
              <Square size={16} />
              Stop
            </button>
            {/* DOWNLOAD */}
              <button
    onClick={handleDownloadAudio}
    disabled={downloading}
    className="flex items-center gap-2 bg-teal-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-teal-600 disabled:opacity-60 disabled:cursor-not-allowed transition"
  >
    {downloading ? (
      <>
        <Loader2 className="animate-spin" size={16} />
        Preparing...
      </>
    ) : (
      <>
        🎧 Download
      </>
    )}
  </button>
          </div>
        </div>

        {/* VOICE SETTINGS */}
        <div className="bg-gray-50 p-4 rounded-xl mb-6 border space-y-4">
          <h3 className="flex items-center gap-2 text-gray-700 font-medium">
            <Settings size={18} className="text-gray-600" /> Voice Options
          </h3>

          {/* VOICE SELECTION */}
          <div>
            <label className="text-sm font-medium text-gray-700">Voice</label>
            <select
              className="w-full border px-3 py-2 rounded-lg mt-1"
              value={selectedVoice?.name}
              onChange={(e) => {
                const v = voices.find((voice) => voice.name === e.target.value);
                setSelectedVoice(v);
              }}
            >
              {voices.map((voice, idx) => (
                <option key={idx} value={voice.name}>
                  {voice.name} — ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          {/* SPEED SELECTION */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Narration Speed
            </label>
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full border px-3 py-2 rounded-lg mt-1"
            >
              <option value="0.8">Slow</option>
              <option value="1">Normal</option>
              <option value="1.3">Fast</option>
            </select>
          </div>
        </div>

        {/* CHAT WINDOW */}
        <div className="h-[60vh] md:h-[65vh] overflow-y-auto px-2 space-y-4 pb-4 border-t pt-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-2xl leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-red-600 text-white rounded-br-none"
                    : "bg-gray-100 border rounded-bl-none text-gray-700"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-xl flex items-center gap-2 text-gray-700">
                <Loader2 className="animate-spin" size={20} />
                AI is narrating…
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* INPUT */}
        <div className="mt-4 flex items-center gap-3">
            {/* Microphone Button */}
  <button
    onMouseDown={startListening}
    onTouchStart={startListening}
    className={`p-3 rounded-xl transition text-white 
      ${listening ? "bg-red-700 animate-pulse" : "bg-red-500 hover:bg-red-600"}`}
  >
    🎤
  </button>
          <input
            type="text"
            value={input}
            placeholder="Ask for a monastery story..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 border px-4 py-3 rounded-xl focus:ring focus:ring-red-200"
          />

          <button
            onClick={sendMessage}
            className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition"
          >
            <Send size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
