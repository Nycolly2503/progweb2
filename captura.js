const  tamanho Celula  =  40 ;
deixe  pecaId  =  0 ;
deixe  localAtual  =  80 ;
deixe  localFuturo  =  81 ;
deixe  classe  = '' ;
deixe  localCaptura  =  '' ;
deixe  jogada  =  0 ;
documento . corpo . anexar ( criaTabuleiro ( ) ) ;

função  criaTabuleiro ( )  {
     tamanho  const =  8 ;
    deixe  tabela  =  document . createElement ( 'tabela' ) ;

    tabela . estilo . borderStyle  =  'solid' ;
    tabela . estilo . borderSpacing  =  0 ;
    tabela . estilo . margem  =  'auto' ;

    for  ( seja  i  =  0 ;  i  <  tamanho ;  i ++ )  {
        deixe  linha  =  documento . createElement ( 'tr' ) ;
        tabela . anexar ( linha ) ;
        for  ( deixe  j  =  0 ;  j  <  tamanho ;  j ++ )  {
            deixe  cellula  =  documento . createElement ( 'td' ) ;
			celula . setAttribute ( 'id' , ` ${ j } `  +  '-'  +  ` ${ i } ` ) ;
            linha . anexar ( celula ) ;
            celula . estilo . largura  =  ` ${ tamanhoCelula } px` ;
            celula . estilo . altura  =  ` ${ tamanhoCelula } px` ;
			pecaId  +=  1 ;
	
            if  ( i  %  2  ==  j  %  2 )  {
                celula . estilo . backgroundColor  =  'preto' ;
				celula . setAttribute ( "class" , "droptarget" ) ;
                if  ( i  *  8  +  j  <=  24 )  {
                    celula . append ( criPeca ( 'preto' , pecaId ) ) ;
                }  senão  if  ( i  *  8  +  j  >=  40 )  {
                    celula . append ( criPeca ( 'red' , pecaId ) ) ;
                }
            }  senão  {
                celula . estilo . backgroundColor  =  'branco' ;
            }
        }
    } ;
	
    retornar  tabela ;	
}

function  criaPeca ( cor , ide )  {
		deixe  imagem  =  documento . createElement ( 'img' ) ;
		imagem . setAttribute ( 'src' ,  `img/ ${ cor } .png` ) ;
		imagem . setAttribute ( 'width' ,  ` ${ tamanhoCelula - 4 } px` ) ;
		imagem . setAttribute ( 'altura' ,  ` ${ tamanhoCelula - 4 } px` ) ;
		imagem . setAttribute ( 'arrastável' , 'true' ) ;
		imagem . setAttribute ( 'id' ,  ide ) ;
		imagem . setAttribute ( 'classe' ,  cor ) ;
		
    retornar  imagem ;
}

função  dragstart ( ) {
	documento . addEventListener ( "dragstart" ,  function ( evento )  {
		evento . transferência de dados . setData ( "Texto" ,  event . target . id ) ;
		localAtual  =  evento . caminho [ 1 ] . identificação . toString ( ) ;
		classe  =  evento . caminho [ 0 ] . className ;
	} ) ;
}

função  dragend ( )  {
	documento . addEventListener ( "dragend" ,  function ( evento )  {
	} ) ;
}

função  arrastar ( )  {
	documento . addEventListener ( "dragover" ,  function ( evento )  {
		evento . preventDefault ( ) ;
	} ) ;
}

função  drop ( ) {
	documento . addEventListener ( "drop" ,  function ( evento )  {
	evento . preventDefault ( ) ;
	if  (  event . target . className  ==  "droptarget" )  {
		const  dados  =  evento . transferência de dados . getData ( "Texto" ) ;
		seja  c  =  evento . caminho [ 0 ] ;
		seja  t  =  c . childElementCount ;
		localFuturo  =  evento . alvo . identificação . toString ( ) ;
		deixe  xa  =  localAtual . substring ( 0 , 1 ) ;
		deixe  ya  =  localAtual . substring ( 2 , 3 ) ;
		deixe  xf  =  localFuturo . substring ( 0 , 1 ) ;
		deixe  yf  =  localFuturo . substring ( 2 , 3 ) ;
		
		if ( classe  ==  'preto'  &&  xf  <  xa )  {
			localCaptura  =  ( parseInt ( xa )  -1  ) . _ toString ( ) + "-" + ( parseInt ( ya ) + 1 ) . toString ( ) ;      
		}  else  if ( classe  ==  'preto'  &&  xf  >  xa )  {
			localCaptura  =  ( parseInt ( xa )  +  1 ) . toString ( )  +  "-"  +  ( parseInt ( ya )  +  1 ) . toString ( ) ;
		}  else  if ( classe  ==  'vermelho'  &&  xf  >  xa ) {
			localCaptura  =  ( parseInt ( xa )  +  1 ) . toString ( )  +  "-  " +  ( parseInt ( ya )  -1  ) . toString ( ) ;
		}  else  if ( classe  ==  'vermelho'  &&  xf  <  xa ) {
			localCaptura  =  ( parseInt ( xa )  -1  ) . _ toString ( ) + "- " + ( parseInt ( ya ) -1 ) . toString ( ) ;      
		}
		captura  =  documento . getElementById ( localCaptura ) ;
		if ( captura . childElementCount  ==  '1' ) {
			classeCapturada  =  captura . firstElementChild . className ;
			pecaCapturada  =  captura . firstElementChild ;
		}
		if  ( t  ==  '0'  &&  ya  !=  yf ) {
			if  ( classe  ==  'vermelho'  &&  ya  >  yf  &&  ya  -  yf  ==  1  &&  jogada  %  2  ==  0  || 
			ya  -  yf  ==  2  &&  classeCapturada  ==  "preto"  &&  jogada  %  2  ==  0  || 
			classe  ==  'preto'  &&  ya  <  yf  &&  ya  -  yf  ==  - 1  &&  jogada  %  2  ==  1  || 
			ya  -  yf  ==  - 2  &&  classeCapturada  ==  "red"  &&  jogada  %  2  ==  1 )  {
				evento . alvo . appendChild ( document.getElementById ( data ) ) ; _ _
				jogada  +=  1 ;
				if ( ya  -  yf  ==  2  ||  ya  -  yf  ==  - 2 )  {
					pecaCapturada . remover ( ) ;
					pecaCapturada  =  '' ;
					classeCapturada  =  '' ;
				}
			}
		}
		
	}
	} ) ;
}
dragstart ( ) ;
arrasto ( ) ;
arrastar ( ) ;
soltar ( ) ;
