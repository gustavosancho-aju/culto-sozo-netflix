import React, { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { startLogin } from '@/const';
import {
  RefreshCw, CheckCircle, XCircle, Clock, Youtube,
  Settings, History, Play, AlertCircle, Loader2, Lock,
  MessageSquareHeart, ThumbsUp, ThumbsDown, Trash2, Link2,
  MapPin, User, Eye
} from 'lucide-react';
import { toast } from 'sonner';

const CHANNEL_URL = 'https://www.youtube.com/@Lorenaamelo';

const statusIcon = (status: string) => {
  if (status === 'success') return <CheckCircle className="w-4 h-4 text-green-400" />;
  if (status === 'error') return <XCircle className="w-4 h-4 text-red-400" />;
  return <Clock className="w-4 h-4 text-yellow-400" />;
};
const statusLabel = (status: string) => {
  if (status === 'success') return 'Sucesso';
  if (status === 'error') return 'Erro';
  return 'Sem novidades';
};
const actionLabel = (action: string | null) => {
  if (action === 'new_episode') return '+ Episódio';
  if (action === 'new_series') return '+ Nova Série';
  return '—';
};
const formatDate = (date: Date | string | null) => {
  if (!date) return '—';
  return new Date(date).toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
};

// Componente de card de depoimento para moderação
const TestimonialModerationCard: React.FC<{
  testimonial: {
    id: number;
    content: string;
    authorName: string | null;
    authorCity: string | null;
    linkedEpisodeTitle: string | null;
    status: string;
    likesCount: number;
    createdAt: Date;
  };
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onDelete: (id: number) => void;
  isProcessing: boolean;
}> = ({ testimonial, onApprove, onReject, onDelete, isProcessing }) => {
  const [showRejectNote, setShowRejectNote] = useState(false);

  return (
    <div className={`bg-[#1a1a1a] border rounded-xl p-5 space-y-4 transition-all ${
      testimonial.status === 'pending' ? 'border-yellow-500/30' :
      testimonial.status === 'approved' ? 'border-green-500/30' :
      'border-red-500/30'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E50914] to-[#8B0000] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {testimonial.authorName ? testimonial.authorName[0].toUpperCase() : '?'}
          </div>
          <div>
            <p className="text-sm font-semibold text-white flex items-center gap-1">
              <User className="w-3 h-3 text-gray-400" />
              {testimonial.authorName || 'Anônimo'}
            </p>
            {testimonial.authorCity && (
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" /> {testimonial.authorCity}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            testimonial.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
            testimonial.status === 'approved' ? 'bg-green-500/20 text-green-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {testimonial.status === 'pending' ? '⏳ Pendente' :
             testimonial.status === 'approved' ? '✓ Aprovado' : '✗ Rejeitado'}
          </span>
          <span className="text-xs text-gray-600">{formatDate(testimonial.createdAt)}</span>
        </div>
      </div>

      {/* Episódio vinculado */}
      {testimonial.linkedEpisodeTitle && (
        <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full w-fit">
          <Link2 className="w-3 h-3" />
          {testimonial.linkedEpisodeTitle}
        </div>
      )}

      {/* Conteúdo */}
      <p className="text-gray-300 text-sm leading-relaxed bg-[#141414] rounded-lg p-4 border border-white/5">
        "{testimonial.content}"
      </p>

      {/* Ações */}
      {testimonial.status === 'pending' && (
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => onApprove(testimonial.id)}
            disabled={isProcessing}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <ThumbsUp className="w-4 h-4" /> Aprovar
          </button>
          <button
            onClick={() => onReject(testimonial.id)}
            disabled={isProcessing}
            className="flex items-center gap-2 bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            <ThumbsDown className="w-4 h-4" /> Rejeitar
          </button>
          <button
            onClick={() => onDelete(testimonial.id)}
            disabled={isProcessing}
            className="flex items-center gap-2 border border-white/10 hover:border-red-500/50 hover:text-red-400 text-gray-400 text-sm px-3 py-2 rounded-lg transition ml-auto"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
      {testimonial.status !== 'pending' && (
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" /> {testimonial.likesCount} curtidas
          </span>
          <button
            onClick={() => onDelete(testimonial.id)}
            disabled={isProcessing}
            className="flex items-center gap-2 border border-white/10 hover:border-red-500/50 hover:text-red-400 text-gray-400 text-xs px-3 py-1.5 rounded-lg transition"
          >
            <Trash2 className="w-3 h-3" /> Excluir
          </button>
        </div>
      )}
    </div>
  );
};

const Admin: React.FC = () => {
  const { user, loading } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState<'sync' | 'testimonials'>('sync');
  const [testimonialFilter, setTestimonialFilter] = useState<'pending' | 'approved' | 'rejected' | 'all'>('pending');
  const [processingIds, setProcessingIds] = useState<Set<number>>(new Set());

  // Sync queries
  const historyQuery = trpc.sync.history.useQuery(undefined, {
    enabled: user?.role === 'admin',
    refetchInterval: 30000,
  });
  const configQuery = trpc.sync.config.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });
  const runSyncMutation = trpc.sync.runNow.useMutation({
    onSuccess: (result) => {
      setIsSyncing(false);
      if (result.status === 'success') toast.success('Sincronização concluída!', { description: result.message });
      else if (result.status === 'no_new_videos') toast.info('Nenhum vídeo novo', { description: result.message });
      else toast.error('Erro na sincronização', { description: result.message });
      historyQuery.refetch();
      configQuery.refetch();
    },
    onError: (err) => { setIsSyncing(false); toast.error('Erro ao sincronizar', { description: err.message }); },
  });

  // Testimonial queries
  const testimonialsQuery = trpc.admin.testimonials.useQuery(
    { status: testimonialFilter },
    { enabled: user?.role === 'admin' && activeTab === 'testimonials' }
  );
  const countsQuery = trpc.admin.testimonialCounts.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });
  const moderateMutation = trpc.admin.moderate.useMutation({
    onSuccess: () => {
      testimonialsQuery.refetch();
      countsQuery.refetch();
    },
    onError: (err) => toast.error('Erro ao moderar depoimento', { description: err.message }),
  });
  const deleteMutation = trpc.admin.deleteTestimonial.useMutation({
    onSuccess: () => {
      toast.success('Depoimento excluído.');
      testimonialsQuery.refetch();
      countsQuery.refetch();
    },
    onError: (err) => toast.error('Erro ao excluir', { description: err.message }),
  });

  const handleApprove = (id: number) => {
    setProcessingIds(prev => new Set(Array.from(prev).concat(id)));
    moderateMutation.mutate({ id, status: 'approved' }, {
      onSettled: () => setProcessingIds(prev => { const s = new Set(Array.from(prev)); s.delete(id); return s; }),
    });
    toast.success('Depoimento aprovado e publicado!');
  };
  const handleReject = (id: number) => {
    setProcessingIds(prev => new Set(Array.from(prev).concat(id)));
    moderateMutation.mutate({ id, status: 'rejected' }, {
      onSettled: () => setProcessingIds(prev => { const s = new Set(Array.from(prev)); s.delete(id); return s; }),
    });
    toast.info('Depoimento rejeitado.');
  };
  const handleDelete = (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este depoimento permanentemente?')) return;
    deleteMutation.mutate({ id });
  };

  if (loading) return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#E50914] animate-spin" />
    </div>
  );
  if (!user) return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center gap-6 text-white">
      <Lock className="w-16 h-16 text-gray-500" />
      <h2 className="text-2xl font-bold">Acesso Restrito</h2>
      <p className="text-gray-400">Faça login para acessar o painel administrativo.</p>
      <button onClick={() => startLogin()} className="bg-[#E50914] hover:bg-[#B20710] text-white px-6 py-3 rounded-lg font-semibold transition">Fazer Login</button>
    </div>
  );
  if (user.role !== 'admin') return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center gap-6 text-white">
      <Lock className="w-16 h-16 text-gray-500" />
      <h2 className="text-2xl font-bold">Sem Permissão</h2>
      <p className="text-gray-400">Você não tem permissão para acessar esta área.</p>
    </div>
  );

  const config = configQuery.data;
  const history = historyQuery.data || [];
  const counts = countsQuery.data || { pending: 0, approved: 0, rejected: 0 };
  const testimonials = testimonialsQuery.data || [];

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-gray-400 mt-1">Gerenciamento do Culto Sozo</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('sync')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'sync' ? 'border-[#E50914] text-white' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Youtube className="w-4 h-4" /> Sincronização YouTube
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'testimonials' ? 'border-[#E50914] text-white' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <MessageSquareHeart className="w-4 h-4" />
            Depoimentos
            {counts.pending > 0 && (
              <span className="bg-[#E50914] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {counts.pending}
              </span>
            )}
          </button>
        </div>

        {/* ===== ABA: SINCRONIZAÇÃO ===== */}
        {activeTab === 'sync' && (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button
                onClick={() => { setIsSyncing(true); runSyncMutation.mutate(); }}
                disabled={isSyncing}
                className="flex items-center gap-2 bg-[#E50914] hover:bg-[#B20710] disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              >
                {isSyncing ? <><Loader2 className="w-5 h-5 animate-spin" /> Sincronizando...</> : <><Play className="w-5 h-5" /> Sincronizar Agora</>}
              </button>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium"><Youtube className="w-4 h-4 text-[#E50914]" /> Canal Monitorado</div>
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#E50914] transition truncate">@Lorenaamelo</a>
                <span className={`text-xs px-2 py-1 rounded-full w-fit ${config?.enabled !== false ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {config?.enabled !== false ? '● Ativo' : '● Pausado'}
                </span>
              </div>
              <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium"><Clock className="w-4 h-4 text-blue-400" /> Última Sincronização</div>
                <p className="text-white font-semibold text-sm">{formatDate(config?.lastSyncAt ?? null)}</p>
                {config?.lastVideoId && (
                  <a href={`https://www.youtube.com/watch?v=${config.lastVideoId}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition truncate">
                    Último vídeo: {config.lastVideoId}
                  </a>
                )}
              </div>
              <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium"><Settings className="w-4 h-4 text-purple-400" /> Agendamento</div>
                <p className="text-white font-semibold">Toda Terça-feira</p>
                <p className="text-gray-400 text-xs">06:00 (horário de Brasília)</p>
              </div>
            </div>

            {/* Como funciona */}
            <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-yellow-400" /> Como funciona a sincronização automática</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex flex-col gap-2"><span className="text-[#E50914] font-bold text-lg">1</span><p><strong className="text-white">Toda terça-feira</strong>, o sistema busca automaticamente o vídeo mais recente do canal <strong className="text-white">@Lorenaamelo</strong>.</p></div>
                <div className="flex flex-col gap-2"><span className="text-[#E50914] font-bold text-lg">2</span><p>Verifica se é do <strong className="text-white">mesmo mês</strong>. Se sim, adiciona como episódio. Se for mês novo, <strong className="text-white">cria nova série</strong>.</p></div>
                <div className="flex flex-col gap-2"><span className="text-[#E50914] font-bold text-lg">3</span><p>O vídeo mais recente vira o <strong className="text-white">destaque principal</strong> do site automaticamente.</p></div>
              </div>
            </div>

            {/* Histórico */}
            <div className="bg-[#1f1f1f] border border-white/10 rounded-xl overflow-hidden">
              <div className="p-5 border-b border-white/10 flex items-center gap-2">
                <History className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-bold">Histórico de Sincronizações</h2>
                <span className="ml-auto text-xs text-gray-500">Atualiza a cada 30s</span>
              </div>
              {historyQuery.isLoading ? (
                <div className="flex items-center justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>
              ) : history.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-gray-500">
                  <RefreshCw className="w-8 h-8" />
                  <p>Nenhuma sincronização realizada ainda.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="text-gray-400 text-xs border-b border-white/10">
                      <th className="text-left px-5 py-3">Status</th>
                      <th className="text-left px-5 py-3">Data</th>
                      <th className="text-left px-5 py-3">Vídeo</th>
                      <th className="text-left px-5 py-3">Ação</th>
                      <th className="text-left px-5 py-3">Série</th>
                      <th className="text-left px-5 py-3">Detalhes</th>
                    </tr></thead>
                    <tbody>
                      {history.map((item) => (
                        <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition">
                          <td className="px-5 py-3"><div className="flex items-center gap-2">{statusIcon(item.status)}<span className={item.status === 'success' ? 'text-green-400' : item.status === 'error' ? 'text-red-400' : 'text-yellow-400'}>{statusLabel(item.status)}</span></div></td>
                          <td className="px-5 py-3 text-gray-400 whitespace-nowrap">{formatDate(item.executedAt)}</td>
                          <td className="px-5 py-3 max-w-[220px]">{item.videoId ? (<a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E50914] transition truncate block text-sm" title={item.videoTitle || ''}>{item.videoTitle || item.videoId}</a>) : '—'}</td>
                          <td className="px-5 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${item.action === 'new_series' ? 'bg-purple-500/20 text-purple-400' : item.action === 'new_episode' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'}`}>{actionLabel(item.action)}</span></td>
                          <td className="px-5 py-3 text-gray-400 max-w-[160px] truncate">{item.seriesTitle || '—'}</td>
                          <td className="px-5 py-3 text-gray-500 max-w-[180px] truncate">{item.errorMessage || item.details || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== ABA: DEPOIMENTOS ===== */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            {/* Contadores */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1f1f1f] border border-yellow-500/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-yellow-400">{counts.pending}</p>
                <p className="text-xs text-gray-400 mt-1">Aguardando revisão</p>
              </div>
              <div className="bg-[#1f1f1f] border border-green-500/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-green-400">{counts.approved}</p>
                <p className="text-xs text-gray-400 mt-1">Publicados</p>
              </div>
              <div className="bg-[#1f1f1f] border border-red-500/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-red-400">{counts.rejected}</p>
                <p className="text-xs text-gray-400 mt-1">Rejeitados</p>
              </div>
            </div>

            {/* Filtros */}
            <div className="flex gap-2 flex-wrap">
              {(['pending', 'approved', 'rejected', 'all'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setTestimonialFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    testimonialFilter === f
                      ? 'bg-[#E50914] text-white'
                      : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {f === 'pending' ? '⏳ Pendentes' : f === 'approved' ? '✓ Aprovados' : f === 'rejected' ? '✗ Rejeitados' : '👁 Todos'}
                  {f === 'pending' && counts.pending > 0 && <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">{counts.pending}</span>}
                </button>
              ))}
            </div>

            {/* Lista */}
            {testimonialsQuery.isLoading ? (
              <div className="flex items-center justify-center py-16"><Loader2 className="w-8 h-8 animate-spin text-gray-400" /></div>
            ) : testimonials.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 gap-3 text-gray-500">
                <Eye className="w-12 h-12" />
                <p className="text-lg font-medium">Nenhum depoimento {testimonialFilter === 'pending' ? 'pendente' : testimonialFilter === 'approved' ? 'aprovado' : testimonialFilter === 'rejected' ? 'rejeitado' : ''}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {testimonials.map(t => (
                  <TestimonialModerationCard
                    key={t.id}
                    testimonial={t}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    onDelete={handleDelete}
                    isProcessing={processingIds.has(t.id)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;
