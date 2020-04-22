import { 
  action,
  observable 
} from 'mobx';

class HomeStore {
  @observable random: any = Math.random();

  @action getRandom() {
    return this.random;
  }
}


export default HomeStore;