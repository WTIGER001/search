import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx"
import { User } from './models/user';
import { Configuration } from './models/configuration';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class UserService {
  public config: Subject<Configuration> = new Subject()
  public user: User

  constructor(private _cfgService: ConfigurationService) {
    //TODO: Make a service call
    this.user = {
      id: "ft1ab",
      name: "John Bauer",
      email: "John.baueriii@gmail.com",
      tabs: ["ba622de0-5600-4fac-a9bb-1cee633eec25"],
      organization: "Self",
      picture: "None",
      defaultConfiguration: "ba622de0-5600-4fac-a9bb-1cee633eec25"
    }
    this.setCurrentConfigurationId(this.user.defaultConfiguration)
  }

  public getUser(): User {
    return this.user;
  }

  public getConfig(): Observable<Configuration> {
    return this.config
  }

  public setCurrentConfiguration(cfg: Configuration) {
    this.config.next(cfg)
  }

  public setCurrentConfigurationId(cfgId: string) {
    this._cfgService.getConfiguration(cfgId).subscribe(
      d => this.setCurrentConfiguration(d)
    )
  }

  public getTabs(): Configuration[] {
    let u = this.getUser()
    let a = new Array<Configuration>()
    u.tabs.forEach(tabId => {
      this._cfgService.getConfiguration(tabId).subscribe(d => a.push(d))
    })
    return a
  }

}
