import { makeAutoObservable, runInAction } from 'mobx'
import { makePersistable, isHydrated } from 'mobx-persist-store'
import forage from 'utils/forage'

class LoadingStore {

  constructor() {
    makeAutoObservable(this)
  };

  list = [];

  get isLoading() {
    return this.list.length > 0;
  }

  get loadingList() {
    return this.list;
  }

  addLoading(task) {
    const id = Math.random().toString(16).slice(2);
    this.list.push({ task, id });
    return id;
  }

  removeLoading(id) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}

class CacheStore {

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'DeepL-Crack-Cache',
      properties: ['persistCache'],
      storage: forage,
      stringify: false
    })

  };

  cache = new Map();

  getCache(key) {
    return this.cache.get(key);
  }

  setCache(key, value) {
    this.cache.set(key, value);
  }

  persistCache = new Map();

  getPersistCache(key) {
    return this.persistCache.get(key);
  }

  setPersistCache(key, value) {
    this.persistCache.set(key, value);
  }

}


class RootStore {
  constructor() {
    this.configStore = new ConfigStore(this);
    this.windowStore = new WindowStore(this);
    this.documentStore = new DocumentStore(this);
    this.cacheStore = new CacheStore(this);
    this.loadingStore = new LoadingStore(this);
    this.tokenStore = new TokenStore(this);
  }
}

class ConfigStore {

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'DeepL-Crack-Config',
      properties: ['config'],
      storage: forage,
      stringify: false
    })
  };

  get isHydrated() {
    return isHydrated(this);
  }

  config = {
    available: true,
    domModifier: [],
    announcements: []
  };

  get getAnnouncements() {
    return this.config.announcements
  }

  get getDomModifier() {
    return this.config.domModifier
  }

  get getAvailable() {
    return this.config.available
  }

  setAvailable(available) {
    this.config.available = available;
  }

  setDomModifier(domModifier) {
    this.config.domModifier = domModifier;
  }

  setAnnouncements(announcements) {
    this.config.announcements = announcements;
  }

}

class WindowStore {

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this)
  };

  announcementWindowOpen = false;
  documentWindowOpen = false;
  tokenWindowOpen = false;

  get isAnnouncementWindowOpen() {
    return this.announcementWindowOpen;
  }

  get isDocumentWindowOpen() {
    return this.documentWindowOpen;
  }

  get isTokenWindowOpen() {
    return this.tokenWindowOpen;
  }

  toggleAnnouncementWindow() {
    this.announcementWindowOpen = !this.announcementWindowOpen;
  }

  toggleDocumentWindow() {
    this.documentWindowOpen = !this.documentWindowOpen;
  }

  toggleTokenWindow() {
    this.tokenWindowOpen = !this.tokenWindowOpen;
  }

}

class DocumentStore {

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'DeepL-Crack-Document',
      properties: ['documents'],
      storage: forage,
      stringify: false,
    })
  };

  get isHydrated() {
    return isHydrated(this);
  }

  documents = [];

  deleteDocument(name) {
    this.documents = this.documents.filter(doc => doc.name !== name);
  }

  cleanDocument() {
    this.documents = [];
  }

  get getDocumentList() {
    return this.documents
  }

  addDocument(document, specifiedName) {
    this.deleteDocument(document.name || specifiedName);
    const blob = new Blob([document], { type: document.type });
    this.documents.push({
      name: specifiedName || document.name,
      blob
    });
  }

  modifyDocument(name, blob) {
    this.documents = this.documents.map(doc => {
      if (doc.name === name) {
        return {
          ...doc,
          blob
        }
      }
      return doc;
    })
  }

}

class TokenStore {

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'DeepL-Crack-Token',
      properties: ['tokens', 'activeId'],
      storage: forage,
      stringify: false,
    })
  };

  get isHydrated() {
    return isHydrated(this);
  }

  tokens = [];

  activeId = null;

  setActiveId(id) {
    this.activeId = id;
  }

  get getActiveToken() {
    return this.tokens.find(t => t.id === this.activeId) || null;
  }

  deleteToken(token) {
    this.tokens = this.tokens.filter(t => t.token !== token);
  }

  get getTokenList() {
    return this.tokens.sort((a, b) => {
      if (a.type === 'private' && b.type !== 'private') {
        return -1;
      }
      if (a.type !== 'private' && b.type === 'private') {
        return 1;
      }
      if (a.validCharacter > b.validCharacter) {
        return -1;
      }
      if (a.validCharacter < b.validCharacter) {
        return 1;
      }
      return 0;
    })
  }

  addToken(token) {
    if (this.tokens.find(t => t.token === token.token)) {
      this.tokens = this.tokens.map(t => {
        if (t.token === token.token) {
          return token;
        }
        return t;
      });
    } else {
      this.tokens.push(token);
    }
  }

}

export default new RootStore();