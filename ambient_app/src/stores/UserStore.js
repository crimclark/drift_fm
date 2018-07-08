import { observable, action } from 'mobx';

class UserStore {
  constructor(SongStore) {
    this.songStore = SongStore;
  }

  @observable guest;
  @observable loggedIn;

  @action setGuest() {
    this.guest = true;
  }

  @action setSongState(song) {
    this.songStore.song = song;
  }

  @action setLoggedIn(song) {
    this.loggedIn = true;
    this.setSongState(song)
  }
}

export default UserStore;