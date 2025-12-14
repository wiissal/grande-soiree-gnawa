import {useQuery} from '@tanstack/react-query';
import {eventService} from '../services/eventService';
import {getFormStorage, saveToStorage} from '../utils/storage';

export const useEvent = () =>{
  return useQuery ({
    queryKey: ['event'],
    queryFn: async () => {
      try{
        //try to fetch  data from API
        const data = await eventService.getEvent();
        //save to offline storage
        await saveToStorage('event' .data);
        return data;
      }catch (error){
        //if API fails, get from offline storage
        const cachedData = await getFormStorage('event');
        if (cachedData) return cachedData;
        throw error;
      }
    },
    staleTime : 1000 * 60 * 5

  });
};