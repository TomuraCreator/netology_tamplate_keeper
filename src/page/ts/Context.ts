import HTMLDocument from "./model/HTMLDocument";
import LocalStorage from "./model/LocalStorage";


// singltone
export default class Context {
  private window: Window;

  constructor() {
    this.window = window;
  }

  public get getWindow(): Window {
    return this.window;
  }

  public get getDocument(): HTMLDocument {
    return new HTMLDocument(this.getWindow.document);
  }

  public get getLocalStorage(): LocalStorage {
    return new LocalStorage(this.getWindow.localStorage);
  }
}