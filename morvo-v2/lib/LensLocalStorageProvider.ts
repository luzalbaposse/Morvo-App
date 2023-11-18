
import { IStorageProvider } from "@lens-protocol/client";

export class LensLocalStorageProvider implements IStorageProvider {
    getItem(key: string) {
      return window.localStorage.getItem(key);
    }
  
    setItem(key: string, value: string) {
      window.localStorage.setItem(key, value);
    }
  
    removeItem(key: string) {
      window.localStorage.removeItem(key);
    }
}