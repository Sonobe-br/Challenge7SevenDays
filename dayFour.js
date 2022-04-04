let comercialUd = ['Andreassa','Taina','Amanda','Yara'];
let comercialInd = ['Sabrina','Gabriela','Tatiana'];
let marketing = ['Gabriel','Eduardo','Hagata'];
let tech = ['José','Roberto'];
let rh = ['Vanessa','Thais','Danilo'];
let qualidade = ['Henrique','Junior','Nilson'];

const setoresBandeirante = [comercialUd, comercialInd, marketing, tech, rh, qualidade];

function atualizaSetorComercial (comercialUd, comUd) {

    if (comercialUd.indexOf(comUd) === -1) {

        comercialUd.push(comUd);
        
        console.log(`O novo colaborador cadastrado no setor comercial é ${comercialUd}`);
        
    } else if (comercialUd.indexOf(comUd) > -1) {
        
        console.log(`O colaborado ${comercialUd} já existe no cadastro`);

        atualizaSetorComercial (comercialUd, 'Flavia');
    }
    
}
console.log(atualizaSetorComercial, comercialUd);



/* Mapeando um array de números para um array de raízes quadradas  */

let kids = [10, 50, 100, 150];

const atualizaLista = () => {

    allKids = kids.map(Math.sqrt);

    return allKids

}
atualizaLista();
console.log(allKids)