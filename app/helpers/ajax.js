export async function ajax(props) {
    let { url, method, pars, cbSuccess }  = props;
    
    if (method === "GET") {
        await fetch(url)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => cbSuccess(data))
        .catch(err => {
            document.getElementById("img-sect").innerHTML = `
                <h2 class="error">Backend is hosted on Heroku, it may take some seconds to load the first time.</h2>
            `
            console.log(`Error ${err.status}, ${err.statusText}`)
        });
    }
    if (method === "POST") {
        let formData = new FormData();
        formData.append("title", pars.name);
        formData.append("image", pars);
        
        try {
            let args = {
                method: "POST",
                headers: {
                    "Content-Type": `${pars.type}`,
                    "Content-Disposition": `'attachment; filename="${pars.name}"'`,
                    "enc-type": "multipart/form-data",
                },
                body: pars
            }
            const response = await fetch(url, args),
                json = await response.json();
            cbSuccess("image");
            console.log(json)
            if (!response.ok) throw {status: response.status, statusText: response.statusText};
        } catch (err) {
            console.log(`Error ${err.status}: ${err.statusText}`);
        }
        
    }

    if (method === "DELETE") {
        try {
            const response = await fetch(url, {
                method: "DELETE",
            });

            if (!response.ok) throw { status: response.status, statusText: response.statusText};

            cbSuccess("deleted");
        } catch (err) {
            console.log(url)
            console.log(`Error: ${err.status}. ${err.statusText}`);
        } 
    }
}