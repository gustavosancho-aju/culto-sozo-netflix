import React, { useState, useMemo } from 'react';
import { Heart, Send, User, MapPin, Link2, ChevronDown, ChevronUp, MessageSquareHeart, Sparkles, Quote } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { dataService } from '../services/dataService';
import { toast } from 'sonner';

// Componente de card de depoimento
const TestimonialCard: React.FC<{
  testimonial: {
    id: number;
    content: string;
    authorName: string | null;
    authorCity: string | null;
    linkedEpisodeId: string | null;
    linkedEpisodeTitle: string | null;
    likesCount: number;
    approvedAt: Date | null;
    createdAt: Date;
  };
  isLiked: boolean;
  onLike: (id: number) => void;
}> = ({ testimonial, isLiked, onLike }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.content.length > 280;
  const displayContent = isLong && !expanded
    ? testimonial.content.slice(0, 280) + '...'
    : testimonial.content;

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="group relative bg-[#1c1c1c] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col gap-4">
      {/* Aspas decorativas */}
      <Quote className="absolute top-4 right-5 w-8 h-8 text-[#E50914]/20 rotate-180" />

      {/* Episódio vinculado */}
      {testimonial.linkedEpisodeTitle && (
        <div className="flex items-center gap-2 text-xs text-[#E50914] font-medium bg-[#E50914]/10 px-3 py-1.5 rounded-full w-fit">
          <Link2 className="w-3 h-3" />
          <span className="truncate max-w-[200px]">{testimonial.linkedEpisodeTitle}</span>
        </div>
      )}

      {/* Conteúdo */}
      <p className="text-gray-200 text-sm leading-relaxed">
        {displayContent}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition w-fit"
        >
          {expanded ? <><ChevronUp className="w-3 h-3" /> Ver menos</> : <><ChevronDown className="w-3 h-3" /> Ler mais</>}
        </button>
      )}

      {/* Rodapé */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E50914] to-[#8B0000] flex items-center justify-center text-white text-xs font-bold">
            {testimonial.authorName ? testimonial.authorName[0].toUpperCase() : '?'}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {testimonial.authorName || 'Anônimo'}
            </p>
            {testimonial.authorCity && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" /> {testimonial.authorCity}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-600">{formatDate(testimonial.approvedAt)}</span>
          <button
            onClick={() => onLike(testimonial.id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
              isLiked
                ? 'bg-[#E50914]/20 border-[#E50914]/50 text-[#E50914]'
                : 'border-white/10 text-gray-400 hover:border-[#E50914]/40 hover:text-[#E50914]'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-[#E50914]' : ''}`} />
            {testimonial.likesCount}
          </button>
        </div>
      </div>
    </div>
  );
};

// Formulário de envio
const TestimonialForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorCity, setAuthorCity] = useState('');
  const [linkedEpisodeId, setLinkedEpisodeId] = useState('');
  const [linkedEpisodeTitle, setLinkedEpisodeTitle] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showEpisodeLink, setShowEpisodeLink] = useState(false);

  // Carregar episódios para o select
  const allEpisodes = useMemo(() => {
    const data = dataService.getData();
    return data.episodes
      .sort((a, b) => {
        // Ordenar por série (mais recente primeiro) e depois por ordem
        const seriesA = data.series.find(s => s.id === a.serieId);
        const seriesB = data.series.find(s => s.id === b.serieId);
        if (seriesA && seriesB && seriesA.ordem !== seriesB.ordem) {
          return seriesB.ordem - seriesA.ordem;
        }
        return b.ordem - a.ordem;
      });
  }, []);

  const allSeries = useMemo(() => dataService.getData().series, []);

  const submitMutation = trpc.testimonials.submit.useMutation({
    onSuccess: () => {
      toast.success('Depoimento enviado com sucesso! Ele será publicado após revisão.', {
        duration: 5000,
        icon: '🙏',
      });
      setContent('');
      setAuthorName('');
      setAuthorCity('');
      setLinkedEpisodeId('');
      setLinkedEpisodeTitle('');
      setIsAnonymous(false);
      setShowEpisodeLink(false);
      onSuccess();
    },
    onError: (err) => {
      toast.error(err.message || 'Erro ao enviar depoimento. Tente novamente.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim().length < 10) {
      toast.error('Por favor, escreva um depoimento mais detalhado (mínimo 10 caracteres).');
      return;
    }
    submitMutation.mutate({
      content: content.trim(),
      authorName: isAnonymous ? undefined : (authorName.trim() || undefined),
      authorCity: authorCity.trim() || undefined,
      linkedEpisodeId: linkedEpisodeId || undefined,
      linkedEpisodeTitle: linkedEpisodeTitle || undefined,
    });
  };

  const handleEpisodeSelect = (episodeId: string) => {
    setLinkedEpisodeId(episodeId);
    if (episodeId) {
      const ep = allEpisodes.find(e => e.youtubeVideoId === episodeId);
      if (ep) setLinkedEpisodeTitle(ep.titulo);
    } else {
      setLinkedEpisodeTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1c1c1c] border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E50914] to-[#8B0000] flex items-center justify-center">
          <MessageSquareHeart className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Compartilhe seu testemunho</h3>
          <p className="text-gray-400 text-sm">Sua história pode transformar a vida de alguém</p>
        </div>
      </div>

      {/* Textarea */}
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Conte como o Culto Sozo impactou sua vida... (mínimo 10 caracteres)"
          rows={5}
          maxLength={1000}
          className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm resize-none focus:outline-none focus:border-[#E50914]/50 transition"
          required
        />
        <div className="flex justify-end mt-1">
          <span className={`text-xs ${content.length > 900 ? 'text-[#E50914]' : 'text-gray-600'}`}>
            {content.length}/1000
          </span>
        </div>
      </div>

      {/* Nome e Cidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <User className="w-4 h-4" /> Seu nome (opcional)
          </label>
          <input
            type="text"
            value={isAnonymous ? '' : authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Como você quer ser identificado?"
            disabled={isAnonymous}
            maxLength={128}
            className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E50914]/50 transition disabled:opacity-40"
          />
          <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-gray-300 transition">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="accent-[#E50914]"
            />
            Publicar como anônimo
          </label>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin className="w-4 h-4" /> Cidade (opcional)
          </label>
          <input
            type="text"
            value={authorCity}
            onChange={(e) => setAuthorCity(e.target.value)}
            placeholder="Ex: Aracaju - SE"
            maxLength={128}
            className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E50914]/50 transition"
          />
        </div>
      </div>

      {/* Vincular episódio */}
      <div>
        <button
          type="button"
          onClick={() => setShowEpisodeLink(!showEpisodeLink)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
        >
          <Link2 className="w-4 h-4" />
          {showEpisodeLink ? 'Remover vínculo com episódio' : 'Vincular a um episódio específico (opcional)'}
          {showEpisodeLink ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {showEpisodeLink && (
          <div className="mt-3">
            <select
              value={linkedEpisodeId}
              onChange={(e) => handleEpisodeSelect(e.target.value)}
              className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#E50914]/50 transition"
            >
              <option value="">Selecione um episódio...</option>
              {allSeries.sort((a, b) => b.ordem - a.ordem).map(serie => {
                const eps = allEpisodes.filter(e => e.serieId === serie.id).sort((a, b) => b.ordem - a.ordem);
                if (eps.length === 0) return null;
                return (
                  <optgroup key={serie.id} label={serie.titulo}>
                    {eps.map(ep => (
                      <option key={ep.id} value={ep.youtubeVideoId}>
                        {ep.titulo}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
          </div>
        )}
      </div>

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={submitMutation.isPending || content.trim().length < 10}
        className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#B20710] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
      >
        {submitMutation.isPending ? (
          <span className="animate-pulse">Enviando...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Testemunho
          </>
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        Todos os depoimentos passam por revisão antes de serem publicados.
      </p>
    </form>
  );
};

// Página principal
const Testimonials: React.FC = () => {
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const LIMIT = 12;

  const { data: testimonialList = [], refetch, isLoading } = trpc.testimonials.list.useQuery({
    limit: LIMIT,
    offset: page * LIMIT,
  });

  const { data: myLikedIds = [] } = trpc.testimonials.myLikes.useQuery(
    { testimonialIds: testimonialList.map(t => t.id) },
    { enabled: testimonialList.length > 0 }
  );

  const likeMutation = trpc.testimonials.like.useMutation({
    onSuccess: (data, variables) => {
      setLikedIds(prev => {
        const next = new Set(prev);
        if (data.liked) next.add(variables.testimonialId);
        else next.delete(variables.testimonialId);
        return next;
      });
      refetch();
    },
  });

  const allLikedIds = new Set([...Array.from(myLikedIds), ...Array.from(likedIds)]);

  const handleLike = (id: number) => {
    likeMutation.mutate({ testimonialId: id });
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-24 pb-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-12 py-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-[#E50914]" />
            <span className="text-[#E50914] font-bold text-sm uppercase tracking-widest">Comunidade Sozo</span>
            <Sparkles className="w-6 h-6 text-[#E50914]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 drop-shadow-lg">
            Testemunhos
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Vidas transformadas pelo poder de Deus através do Culto Sozo. 
            Cada história é uma prova do amor e da graça de Deus.
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-[#E50914] hover:bg-[#B20710] text-white font-bold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-[#E50914]/30"
          >
            <MessageSquareHeart className="w-5 h-5" />
            {showForm ? 'Fechar formulário' : 'Compartilhar meu testemunho'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 space-y-10">
        {/* Formulário */}
        {showForm && (
          <div className="max-w-2xl mx-auto">
            <TestimonialForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        {/* Feed de depoimentos */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#1c1c1c] rounded-xl h-48 animate-pulse" />
            ))}
          </div>
        ) : testimonialList.length === 0 ? (
          <div className="text-center py-20">
            <MessageSquareHeart className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">Ainda não há testemunhos</h3>
            <p className="text-gray-600">Seja o primeiro a compartilhar como o Culto Sozo impactou sua vida!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialList.map(t => (
                <TestimonialCard
                  key={t.id}
                  testimonial={t}
                  isLiked={allLikedIds.has(t.id)}
                  onLike={handleLike}
                />
              ))}
            </div>

            {/* Paginação */}
            <div className="flex items-center justify-center gap-4 pt-4">
              {page > 0 && (
                <button
                  onClick={() => setPage(p => p - 1)}
                  className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition"
                >
                  ← Anteriores
                </button>
              )}
              {testimonialList.length === LIMIT && (
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition"
                >
                  Ver mais →
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
