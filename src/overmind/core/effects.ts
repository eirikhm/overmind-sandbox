class SomeEffect
{
    constructor()
    {
        
    }

    public rejectingMethod()
    {
        console.log('rejectingMethod invoked')
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('rejectingMethod rejecting')
              reject('foo');
            }, 300);
          });
    }
}

export const myEffect = new SomeEffect();
