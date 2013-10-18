// The collection of clue objects
// Each clue is a javascript object



function willAndTestiment()
{
    this.title = "A scrap of charred paper";
    this.img="img/clues/WillAnd.png";
    this.thumb="img/clues/WillAnd_small.png";
    this.unlocked = true;
    this.description="<p>A charred scrap of paper found in the ashes of Mrs. Inglethorpe's fireplace.  The hand is distinctly her's.</p>";
}

function spellCheck()
{
    this.title="An envelope";
    this.img="img/clues/spellCheck.png";
    this.thumb="img/clues/spellCheck_small.png";
    this.unlocked=true;
    this.description="<p>A plain, dirty-looking envelope found on Mr. Inglethorpe's desk.  The handwriting is not his.</p>"
}

function buryTheHatchet()
{
    this.title="A letter";
    this.img="img/clues/BuryTheHatchet.png";
    this.thumb="img/clues/BuryTheHatchet_small.png";
    this.unlocked=false;
    this.description="<p>A letter from Mrs. Inglethorpe produced by Miss Howard at the inquest.  Miss Howard insists it is an indictment of Mr. Inglethorpe.</p>";
    this.hint="<p>Mrs. Inglethorpes letters and numbers are usually well-spaced.  The date, however, looks odd.";
}

function brokenLamp()
{
    this.title="A broken lamp";
    this.unlocked=true;
    this.description="<p>A broken lamp which once sat on Mrs. Inglethorpe's bedside table.  It was broken in two places when the table was overturned.</p>";
    this.hint="<p>The lamp is decidedly less broken than the coffee cup.";
    
}

function bedsideCoffee()
{
    this.title="A broken coffee cup";
    this.unlocked=true;
    this.description="<p>The remnants of coffee cup.  It has been smashed absolutely to powder.<p>";
    this.hint="<p>The cup is distinctly crushed.  It is as if someone ground it to dust to prevent it being analyzed.</p>";
}

function buildClues()
{
    var clueCollection = [];
    clueCollection.push(new willAndTestiment());
    clueCollection.push(new spellCheck());
    clueCollection.push(new buryTheHatchet());
    clueCollection.push(new brokenLamp());
    clueCollection.push(new bedsideCoffee());
    return clueCollection;
}