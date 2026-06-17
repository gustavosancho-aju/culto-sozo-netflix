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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition text-white text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  Copiado!
                </>
              ) : (
                <>
                  <LinkIcon className="w-5 h-5 text-gray-400" />
                  Copiar Link
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
