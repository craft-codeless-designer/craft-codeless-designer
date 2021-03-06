import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CraftDesigner } from '../../src/designer/CraftDesigner';
import { testPageData } from './test-page-data';

const doc = `
# ð¾å­å¨åå è½½é¡µé¢
- è¯·ç¹å»å³ä¸è§çä¿å­åå è½½æé®æµè¯å­å¨åå è½½åè½ã
- Craft ä¼æé¡µé¢åºååæ JSON æ°æ®ã           
- æ­¤ä¾å­ä¸­çæ°æ®è¢«å­å¨å¨ window.localStorage ä¸­ï¼å¨çå®çä¸å¡ç³»ç»ä¸­ï¼å¯ä»¥æè¿ä»½ JSON æ°æ®ä¿å­å°æ°æ®åºã å¸¦æå¡ç«¯æ¥å£çç¤ºä¾è¯·åèï¼ https://github.com/craft-codeless-designer/craft-codeless-designer-demo
- åºåååååºåååè½æ¯ç± useEditor() é©å­è¿åç actions å¯¹è±¡æä¾çï¼ç»èåæ°è¯·åèå®æ¹çææ¡£ï¼https://craft.js.org/docs/api/useEditor`;

export const SaveAndLoad = props => {
  const [pageData, setPageData] = useState('');

  useEffect(() => {
    //TODO:å¨çå®çä¸å¡ç³»ç»ä¸­ï¼è¿éä¼ä» Server ç«¯æ¥å£å è½½é¡µé¢ï¼åè§ craft-codeless-designer-demo é¡¹ç®ã
    setPageData(testPageData);
  }, []);

  return (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={doc}></ReactMarkdown>
      <br></br>
      {/* CraftDesigner èªèº«æ¯ä¸ä¸ªæ®éç React ç»ä»¶ï¼å®çç¨æ³ä¸æ®éç React ç»ä»¶æ²¡æå·®å¼ï¼åªæ¯å®çå¤è§ååè½æ¯è¾å¤æã */}
      <CraftDesigner
        pageData={pageData} // ä¼ éåå§æ°æ®ï¼æ ¼å¼ä¸º JSON
        //ç¹å»é¡¶é¨å¯¼èªæ¡ä¸çä¿å­æé®æ¶ï¼ä¼åè°æ­¤å½æ°
        onSaveData={jsonStr => {
          //FIXME:handle empty string.
          window.localStorage.setItem('test-data', JSON.stringify(jsonStr));
          message.success('Data saved to window.localStorage.');
        }}
        //ç¹å»é¡¶é¨å¯¼èªæ¡ä¸çå è½½æé®æ¶ï¼ä¼åè°æ­¤å½æ°
        onLoadData={evt => {
          let testData = window.localStorage.getItem('test-data');
          if (!testData) {
            console.error('There is no data in window.localStorage.');
            return null;
          }
          testData = JSON.parse(testData);
          setPageData(testData);
        }}
      ></CraftDesigner>
    </>
  );
};
