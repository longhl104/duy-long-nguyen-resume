import { Injectable } from "@angular/core";
import { ScriptStore } from "./script.store";

interface Script
{
    script?: string;
    loaded: boolean;
    src?: string;
    status?: string;
}

@Injectable({
    providedIn: "root",
})
export class ScriptService
{
    private _scripts: { [name: string]: Script } = {};

    constructor()
    {
        ScriptStore.forEach((script) =>
        {
            this._scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        })
    }

    load(...scripts: string[])
    {
        let promises: Promise<any>[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadScript(name: string): Promise<Script>
    {
        return new Promise((resolve, _reject) =>
        {
            //resolve if already loaded
            if (this._scripts[name].loaded)
            {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else
            {
                //load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this._scripts[name].src!;
                if ((<any>script).readyState)
                {  //IE
                    let _script = <any>script;
                    _script.onreadystatechange = () =>
                    {
                        if (_script.readyState === "loaded" || _script.readyState === "complete")
                        {
                            _script.onreadystatechange = null;
                            this._scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                } else
                {  //Others
                    script.onload = () =>
                    {
                        this._scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (_error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
}
