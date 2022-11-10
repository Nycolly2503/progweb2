const  tamanho Celula  =  40
deixe  pecaId  =  0
deixe  imgid 
documento . corpo . anexar ( criaTabuleiro ( ) )

função  criaTabuleiro ( )  {
     tamanho  const =  8
    const  tabela  =  document . createElement ( 'tabela' )

    tabela . estilo . borderStyle  =  'sólido'
    tabela . estilo . borderSpacing  =  0
    tabela . estilo . margem  =  'auto'

    for  ( seja  i  =  0 ;  i  <  tamanho ;  i ++ )  {
        const  linha  =  documento . createElement ( 'tr' )
        tabela . anexar ( linha ) ;
        for  ( deixe  j  =  0 ;  j  <  tamanho ;  j ++ )  {
            const  celula  =  documento . createElement ( 'td' )
            celula . conjunto de dados . lin  =  eu
            celula . conjunto de dados . col  =  j
            linha . anexar ( celula )
            celula . estilo . largura  =  ` ${ tamanhoCelula } px`
            celula . estilo . altura  =  ` ${ tamanhoCelula } px`
            if  ( i  %  2  ==  j  %  2 )  {
                celula . addEventListener ( 'dragover' ,  permDrop )
                celula . estilo . backgroundColor  =  'preto'
                if  ( i  *  8  +  j  <=  24 )  {
                    const  peca = criaPeca  ( 'preto' ) 
                    peca . setAttribute ( 'arrastável' , 'falso' )
                    celula . anexar ( peca )
                    celula . removeEventListener ( 'dragover' ,  permDrop )
                }  senão  if  ( i  *  8  +  j  >=  40 )  {
                    celula . append ( criaPeca ( 'vermelho' ) )
                    celula . removeEventListener ( 'dragover' ,  permDrop )
                }
            }  senão  {
                celula . estilo . backgroundColor  =  'branco'
            }
        }
    } ;
    retornar  tabela ;
}

function  criaPeca ( cor )  {
    const  imagem  =  documento . createElement ( 'img' )
    imagem . classList . adicionar ( 'peça' ) 
    imagem . id  =  `p ${ pecaId ++ } `
    imagem . setAttribute ( 'src' ,  `img/ ${ cor } .png` )
    imagem . setAttribute ( 'width' ,  ` ${ tamanhoCelula - 4 } px` )
    imagem . setAttribute ( 'altura' ,  ` ${ tamanhoCelula - 4 } px` )
    imagem . addEventListener ( 'arrastar' ,  arrastar )
    retornar  imagem
}

função  permDrop ( evento ) {
    evento . preventDefault ( )  // Não vai fazer o normal
    const  imagem  =  documento . querySelector ( `# ${ imgid } ` )
    const  col_ori  =  imagem . parentElement . conjunto de dados . colo 
    const  lin_ori  =  imagem . parentElement . conjunto de dados . lin
    const  lin_des  =  evento . alvo . conjunto de dados . lin 
    const  col_des  =  evento . alvo . conjunto de dados . colo
    if  ( ( imagem . getAttribute ( 'src' )  ==  'img/red.png'  && 
    lin_des  ==  lin_ori - 1  || 
    imagem . getAttribute ( 'src' )  ==  'img/black.png'  && 
    lin_des - 1  ==  lin_ori )  &&
    ( col_ori  ==  col_des - 1  ||  col_ori - 1  ==  col_des ) )  {
        evento . alvo . addEventListener ( 'drop' ,  drop )
    }
}

função  arrastar ( evento )  {
    imgid  =  evento . alvo . Eu iria
}

função  trocaJog ( )  {
    const  pecas  =  documento . querySelectorAll ( '.peca' )
    nozes . forEach ( peca  =>  {
        peca . arrastável  =  ! peca . arrastável
    } )
}
função  drop ( evento )  {
    const  imagem  =  documento . querySelector ( `# ${ imgid } ` )
    imagem . parentElement . addEventListener ( 'dragover' ,  permDrop )
    evento . alvo . appendChild ( imagem )
    imagem . parentElement . removeEventListener ( 'dragover' ,  permDrop )
    trocaJog ( )
}
