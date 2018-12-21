/*HitPoints randomly generate hit points*/

function getHitPoints (level, conMod)
{
    let hitPoints = 0;
        
    if(level == 1)
        {
            hitPoints = Math.floor((Math.random() * 6) + 1) + conMod;

            if(hitPoints < 3)
                {
                    hitPoints = 3;
                }

        }
    else if(level == 2)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 6)
                {
                    hitPoints = 6;
                }

        }
    else if(level == 3)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 9)
                {
                    hitPoints = 9;
                }
        }
    else if(level == 4)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 2) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 9)
                {
                    hitPoints = 9;
                }
        }
    else if(level == 5)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 12)
                {
                    hitPoints = 12;
                }
        }
    else if(level == 6)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 15)
                {
                    hitPoints = 15;
                }
        }
    else if(level == 7)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 18)
                {
                    hitPoints = 18;
                }
        }
    else if(level == 8)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 2) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 19)
                {
                    hitPoints = 19;
                }
        }
    else if(level == 9)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 21)
                {
                    hitPoints = 21;
                }
        }
    else if(level == 10)
        {
            hitPoints = (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod)+ (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod) + (Math.floor((Math.random() * 6) + 1) + conMod);

            if(hitPoints < 24)
                {
                    hitPoints = 24;
                }
        }
    
    return hitPoints;
    
}

function getHitDiceAmount (level)
{
    let hd = "-";
    
    if(level == 1)
        {
            hd = "1";
        }
    else if(level == 2)
        {
            hd = "2";
        }
    else if(level == 3)
        {
            hd = "3";
        }
    else if(level == 4)
        {
            hd = "3+1";
        }
    else if(level == 5)
        {
            hd = "4";
        }
    else if(level == 6)
        {
            hd = "5";
        }
    else if(level == 7)
        {
            hd = "6";
        }
    else if(level == 8)
        {
            hd = "6+1";
        }
    else if(level == 9)
        {
            hd = "7";
        }
    else if(level == 10)
        {
            hd = "8";
        }
    
    return hd;
                
}