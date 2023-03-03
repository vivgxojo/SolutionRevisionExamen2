class Participant{
    constructor(nom="", etablissement="", courriel="") {
        this.nom = nom;
        this.etablissement=etablissement;
        this.courriel = courriel;
    }

    toString() {
        return "<div class='border border-2 col-3 float-start m-4'>" +
            "<p class='font-weight-bold'>" + this.nom + "</p>" +
            "<p>" + this.etablissement + "</p></div>";
    }
}

$("form").submit(function (event){
   event.preventDefault();
   let $etablissement = $("#etablissement").val();
   let $courriel = $("#email").val();
   let domaine = $courriel.substring($courriel.indexOf('@'));
   let domaineValide = "@cegepoutaouais.qc.ca";
   if ($etablissement === "Heritage"){
        domaineValide = "@cegep-heritage.qc.ca";
   }
   else if ($etablissement === "UQO"){
        domaineValide = "@uqo.ca";
   }
   if(domaine !== domaineValide){
       $("#erreurCourriel").removeClass("d-none");
   }
   else {
       $("#erreurCourriel").addClass("d-none");
       participant = new Participant($("#nom").val(), $etablissement, $courriel);
       $("#participants").append(participant.toString());
   }
});