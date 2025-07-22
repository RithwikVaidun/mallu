import { ApiResponse, apiService } from '@/services/api';
import { useEffect, useState } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => Promise<void>;
}

export function useApi<T>(
  endpoint: string,
  immediate: boolean = true
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const response: ApiResponse<T> = await apiService.get(endpoint);
      
      if (response.success) {
        setState({
          data: response.data!,
          loading: false,
          error: null,
        });
      } else {
        setState({
          data: null,
          loading: false,
          error: response.error || 'Unknown error',
        });
      }
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: 'Network error occurred',
      });
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [endpoint, immediate]);

  return {
    ...state,
    refetch: fetchData,
  };
}

export function useApiMutation<T, D = any>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const mutate = async (
    endpoint: string,
    data?: D,
    method: 'POST' | 'PUT' | 'DELETE' = 'POST'
  ) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      let response: ApiResponse<T>;

      switch (method) {
        case 'POST':
          response = await apiService.post(endpoint, data);
          break;
        case 'PUT':
          response = await apiService.put(endpoint, data);
          break;
        case 'DELETE':
          response = await apiService.delete(endpoint);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      if (response.success) {
        setState({
          data: response.data!,
          loading: false,
          error: null,
        });
        return response.data;
      } else {
        setState({
          data: null,
          loading: false,
          error: response.error || 'Unknown error',
        });
        throw new Error(response.error || 'Unknown error');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Network error occurred';
      setState({
        data: null,
        loading: false,
        error: errorMessage,
      });
      throw error;
    }
  };

  return {
    ...state,
    mutate,
  };
} 