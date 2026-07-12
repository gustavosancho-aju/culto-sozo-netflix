import React, { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { startLogin } from '@/const';
import {
  RefreshCw, CheckCircle, XCircle, Clock, Youtube,
  Settings, History, Play, AlertCircle, Loader2, Lock
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

const Admin: React.FC = () => {
  const { user, loading } = useAuth();
  const [isSyncing, setIsSyncing] = useState(false);

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
      if (result.status === 'success') {
        toast.success('Sincronização concluída!', { description: result.message });
      } else if (result.status === 'no_new_videos') {
        toast.info('Nenhum vídeo novo', { description: result.message });
      } else {
        toast.error('Erro na sincronização', { description: result.message });
      }
      historyQuery.refetch();
      configQuery.refetch();
    },
    onError: (err) => {
      setIsSyncing(false);
      toast.error('Erro ao sincronizar', { description: err.message });
    },
  });

  const handleRunSync = () => {
    setIsSyncing(true);
    runSyncMutation.mutate();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#E50914] animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center gap-6 text-white">
        <Lock className="w-16 h-16 text-gray-500" />
        <h2 className="text-2xl font-bold">Acesso Restrito</h2>
        <p className="text-gray-400">Faça login para acessar o painel administrativo.</p>
        <button
          onClick={() => startLogin()}
          className="bg-[#E50914] hover:bg-[#B20710] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  if (user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center gap-6 text-white">
        <Lock className="w-16 h-16 text-gray-500" />
        <h2 className="text-2xl font-bold">Sem Permissão</h2>
        <p className="text-gray-400">Você não tem permissão para acessar esta área.</p>
      </div>
    );
  }

  const config = configQuery.data;
  const history = historyQuery.data || [];

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-gray-400 mt-1">Gerenciamento de sincronização automática com YouTube</p>
          </div>
          <button
            onClick={handleRunSync}
            disabled={isSyncing}
            className="flex items-center gap-2 bg-[#E50914] hover:bg-[#B20710] disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
          >
            {isSyncing ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Sincronizando...</>
            ) : (
              <><Play className="w-5 h-5" /> Sincronizar Agora</>
            )}
          </button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Canal */}
          <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Youtube className="w-4 h-4 text-[#E50914]" />
              Canal Monitorado
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-[#E50914] transition truncate"
            >
              @Lorenaamelo
            </a>
            <span className={`text-xs px-2 py-1 rounded-full w-fit ${config?.enabled !== false ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {config?.enabled !== false ? '● Ativo' : '● Pausado'}
            </span>
          </div>

          {/* Última Sincronização */}
          <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Clock className="w-4 h-4 text-blue-400" />
              Última Sincronização
            </div>
            <p className="text-white font-semibold text-sm">
              {formatDate(config?.lastSyncAt ?? null)}
            </p>
            {config?.lastVideoId && (
              <a
                href={`https://www.youtube.com/watch?v=${config.lastVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-white transition truncate"
              >
                Último vídeo: {config.lastVideoId}
              </a>
            )}
          </div>

          {/* Próxima Sincronização */}
          <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
              <Settings className="w-4 h-4 text-purple-400" />
              Agendamento
            </div>
            <p className="text-white font-semibold">Toda Terça-feira</p>
            <p className="text-gray-400 text-xs">06:00 (horário de Brasília)</p>
          </div>
        </div>

        {/* Como funciona */}
        <div className="bg-[#1f1f1f] border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            Como funciona a sincronização automática
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex flex-col gap-2">
              <span className="text-[#E50914] font-bold text-lg">1</span>
              <p><strong className="text-white">Toda terça-feira</strong>, o sistema busca automaticamente o vídeo mais recente do canal <strong className="text-white">@Lorenaamelo</strong> no YouTube.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#E50914] font-bold text-lg">2</span>
              <p>Verifica se o vídeo é do <strong className="text-white">mesmo mês</strong> da série mais recente. Se sim, adiciona como novo episódio. Se for um mês novo, <strong className="text-white">cria uma nova série</strong> automaticamente.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#E50914] font-bold text-lg">3</span>
              <p>O vídeo mais recente é automaticamente definido como o <strong className="text-white">destaque principal</strong> do site, e o histórico é registrado aqui.</p>
            </div>
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
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          ) : history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3 text-gray-500">
              <RefreshCw className="w-8 h-8" />
              <p>Nenhuma sincronização realizada ainda.</p>
              <p className="text-sm">Clique em "Sincronizar Agora" para testar.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs border-b border-white/10">
                    <th className="text-left px-5 py-3">Status</th>
                    <th className="text-left px-5 py-3">Data</th>
                    <th className="text-left px-5 py-3">Vídeo</th>
                    <th className="text-left px-5 py-3">Ação</th>
                    <th className="text-left px-5 py-3">Série</th>
                    <th className="text-left px-5 py-3">Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          {statusIcon(item.status)}
                          <span className={
                            item.status === 'success' ? 'text-green-400' :
                            item.status === 'error' ? 'text-red-400' : 'text-yellow-400'
                          }>
                            {statusLabel(item.status)}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-gray-400 whitespace-nowrap">
                        {formatDate(item.executedAt)}
                      </td>
                      <td className="px-5 py-3 max-w-[220px]">
                        {item.videoId ? (
                          <a
                            href={`https://www.youtube.com/watch?v=${item.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#E50914] transition truncate block text-sm"
                            title={item.videoTitle || ''}
                          >
                            {item.videoTitle || item.videoId}
                          </a>
                        ) : '—'}
                      </td>
                      <td className="px-5 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.action === 'new_series' ? 'bg-purple-500/20 text-purple-400' :
                          item.action === 'new_episode' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {actionLabel(item.action)}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-gray-400 max-w-[160px] truncate">
                        {item.seriesTitle || '—'}
                      </td>
                      <td className="px-5 py-3 text-gray-500 max-w-[180px] truncate">
                        {item.errorMessage || item.details || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Admin;
