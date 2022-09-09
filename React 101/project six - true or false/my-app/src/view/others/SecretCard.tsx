import React from "react";

export interface Secret{
    truefact:string,
    falsefact:string,
    id:string
}
export const ListOfSecrets:Array<Secret> = [
    {   truefact:"i was born with 13 toes",
    falsefact:'i was born with 6 toes',
        id:'1'
    },
    {   truefact:'i have 13 siblings',
    falsefact:'i have 4 brothers',
        id:'2'
    },
    {   truefact:'i can kill frogs with my mind',
    falsefact:'i like beets',
        id:'3'
    },
    {   truefact:'blue is a fake color',
    falsefact:'blue is my fav color',
        id:'4'

    },
    {   truefact:'i love lemons',
    falsefact:'i hate lemons',
        id:'5'
    },
    {   truefact:'i have uneven legs',
    falsefact:'i eat 10 eggs a day',
        id:'6'
    },
    {   truefact:'my cat can talk',
    falsefact:'my dog can talk',
        id:'7'
    }
]

interface secretCardProps{
    secret:Secret,
    state:Boolean
}


const SecretCard = ({ secret, state }:secretCardProps ) => {
    return (
        <div className="secretCard " >
                {state? (secret.truefact):(secret.falsefact)}
        <div className="invisibleDiv">
            {state? "true" : "false"}
        </div>
        </div>
    );
}

export default SecretCard;