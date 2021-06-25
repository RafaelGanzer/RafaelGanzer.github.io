function confirmarDados(){

    /*
    id="nomeCompletoCliente"
    id="hotelCliente"
    id="quartoCliente"
    id="pontoDeEncontro"
    id="contatoCliente"
    id="qtdADTCliente"
    id="qtdCHDCliente"
    id="qtdFREECliente"
    id="emailCliente"
      */ 
    
    nomeCliente = document.getElementById('nomeCompletoCliente').value;
    hotelCliente = document.getElementById('hotelCliente').value;
    quartoCliente = document.getElementById('quartoCliente').value;
    pontoDeEncontro = document.getElementById('pontoDeEncontro').value;
    contatoCliente = document.getElementById('contatoCliente').value;
    qtdADTCliente = document.getElementById('qtdADTCliente').value;
    qtdCHDCliente = document.getElementById('qtdCHDCliente').value;
    qtdFREECliente = document.getElementById('qtdFREECliente').value;
    emailCliente = document.getElementById('emailCliente').value;

    alert(  nomeCliente + " " + " " + hotelCliente + " " + " " +  quartoCliente + " " + " " + 
            pontoDeEncontro + " " + " " + contatoCliente + " " + " " +  qtdADTCliente + " " + " " +  qtdCHDCliente + " " + " " +  
            qtdFREECliente + " " + " " +  emailCliente );
    
      /*      <div class="modal-body">
            <input type="text" readonly class="form-control-plaintext" id="confirmaNomeCLiente">
        </div>
        <div class="modal-body">
            <input type="text" readonly class="form-control-plaintext" id="confirmaHotel">
        </div>
        <div class="modal-body">
            <input type="text" readonly class="form-control-plaintext" id="confirmaQtdeADT">
        </div>
        <div class="modal-body">
            <input type="text" readonly class="form-control-plaintext" id="confirmaQtdeCHD">
        </div>
        <div class="modal-body">
            <input type="text" readonly class="form-control-plaintext" id="confirmaQtdeFREE">
        </div>

        */

    document.getElementById("confirmaNomeCLiente").innerHTML = nomeCliente;
    document.getElementById("confirmaHotel").innerHTML = hotelCliente;

}


/**
 *   <div class="modal-body">
                    <input type="text" readonly class="form-control-plaintext" id="confirmaNomeCLiente">
                </div>
                <div class="modal-body">
                    <input type="text" readonly class="form-control-plaintext" id="confirmaHotel">
                </div>
                <div class="modal-body">
                    <input type="text" readonly class="form-control-plaintext" id="confirmaQtdeADT">
                </div>
                <div class="modal-body">
                    <input type="text" readonly class="form-control-plaintext" id="confirmaNomeCLiente">
                </div>
 */

    

