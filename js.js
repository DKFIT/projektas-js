const get = async () => {
    //gauti duomenis is api
    try {
        const res = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=n6AGU4aTDBA0AvzMfokFrPlksa1TY8Tn")
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);

    }
};
console.log(get());



