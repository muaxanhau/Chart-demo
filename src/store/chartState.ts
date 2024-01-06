import {ChartModel} from 'models';
import {atom} from 'recoil';

export const chartState = atom<ChartModel[]>({
  key: 'chartState',
  default: [],
});
