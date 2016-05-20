import fetcher         from "../fetcher";
import clone           from "../utils/cloneFunction";

export default function get(id)  {

    // let url = (id) ? `${urlBase}${sourceName}/${id}` : `${urlBase}${sourceName}`;
    let url = get.url;
    let cache = get.cache;

    if (typeof id === "undefined") {

        // console.log("log: Resource->get:", url);

        return new Promise((resolve, response) => {

            if (typeof cache !== "undefined" && cache !== null) {
                let cacheItem = cache.type.get(url);
                if (cacheItem) {
                    let now = (new Date()).getTime();
                    // use cache
                    if (cacheItem.expires > now) {
                        resolve(cacheItem.value);
                        return;
                    // remove expired cacheItem
                    } else {
                        cache.type.remove(url);
                    }
                }
            }

            let fetchCallback = (value) => {

                if (typeof cache === "undefined" || cache === null)
                    return;

                let {
                        expires: cacheExpires,
                        type: cacheType
                    } = cache;

                cacheExpires = parseInt(cacheExpires)*1000;
                let expireDate = (new Date()).getTime()+cacheExpires;
                cacheType.add(url, value, expireDate);

            };

            get.fetcher('GET', url, null, fetchCallback)
                .then(resolve)
                .catch(response);

        });

    } else {

        // Create clone route
        let clone = get.clone();

        clone.url = `${url}/${id}`;

        // copy sub routes too
        for (i in get) {
           if (typeof get[i] !== "function") continue;
           clone[i] = get[i];
           clone[i].url =  `${clone.url}/${i}`;
        }

        return clone;
    }

};

// scoped
get.fetcher = fetcher;
get.cache = null;
get.clone = clone.bind(get);
