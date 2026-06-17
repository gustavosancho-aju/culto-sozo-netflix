import React, { useState } from 'react';
import { Share2, X, MessageCircle, Facebook, Twitter, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url?: string;
  episodeId?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, url, episodeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Generate the share URL
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleWhatsApp = () => {
    const text = `${title}\n\n${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, '_blank');
  };

  const handleTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    window.open(twitterUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setShowToast(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
      
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white text-sm font-medium"
        title="Compartilhar"
      >
        <Share2 className="w-4 h-4" />
        <span className="hidden sm:inline">Compartilhar</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#2F2F2F] rounded-lg shadow-xl z-50 border border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <span className="text-white font-semibold text-sm">Compartilhar</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Share Options */}
          <div className="p-3 space-y-2">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition text-white text-sm font-medium"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp
            </button>

            {/* Facebook */}
            <button
              onClick={handleFacebook}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition text-white text-sm font-medium"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
              Facebook
            </button>

            {/* Twitter */}
            <button
              onClick={handleTwitter}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition text-white text-sm font-medium"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
              Twitter
            </button>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium ${
                copied 
                  ? 'bg-green-500/20 text-green-300' 
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Link copiado!</span>
                </>
              ) : (
                <>
                  <LinkIcon className="w-5 h-5 text-gray-400" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 z-[100]">
          <Check className="w-5 h-5" />
          <span className="font-medium">Link copiado com sucesso!</span>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
