const failed = true;

const myPromise = new Promise((resolve, reject) => {
    if(failed)
        reject("fail promise");
    else
        resolve("resolved");
});

function success(result){
    console.log(result);
}

function onFailed(error){
    console.log(error);
}

myPromise
.then(result => success(result))                    // operation is successful
.catch(error => onFailed(error));                   // operation has failed