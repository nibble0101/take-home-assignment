/* 
- Strip input text of leading or trailing white spaces. This will catch empty strings
- Split text into array of paragraphs. Successive paragraphs are separated by at least two successive line breaks
- Replace new line characters and at least two successive white spaces in each paragraph by a single white space
- Split paragraphs into array of lines
- Join array of lines back to paragraph. Separate successive lines by a new line character
- Join paragraphs to string of text. Successive paragraphs are separated by double new line characters
*/
function hasWhiteSpace(str) {
    return /\s/.test(str);
}
function getLines(paragraph, maxLineCharCount) {
    const words = paragraph.split(" ");
    const lines = [];
    let line = "";
    for(const word of words){
       const currentLine = line ?  `${line} ${word}`: word;
       if(currentLine.length === maxLineCharCount ){
          lines.push(currentLine);
          line = "";
          continue;
       }
       if(currentLine.length > maxLineCharCount){
           if(line){
               lines.push(line);
               if(word.length >= maxLineCharCount){
                   lines.push(word);
                   line = "";
                   continue;
               }
               line = word;
               continue;
           }else{
               lines.push(word);
               line = "";
               continue;
           }
          
       }
       line = currentLine;
    }
    if(line){
        lines.push(line);
    }
    return lines;
}

function formatParagraph(paragraph, maxLineCharCount) {
    if (!hasWhiteSpace(paragraph) || paragraph.length <= maxLineCharCount) {
      return paragraph; // One word paragraph or paragraph is one line long
    }
    const lines = getLines(paragraph, maxLineCharCount);
    return lines.join("\n");
  }
  
 function formatText(text, maxLineCharCount) {
    const paragraphsArray = text.trim().split(/[\n\r]{2,}/gm);
    const formattedParagraphsArray = paragraphsArray.map(paragraph => {
      const cleanParagraph = paragraph.trim().replace(/\s{2,}|[\n\r]{1,}/gm, " ");
      return formatParagraph(cleanParagraph, maxLineCharCount);
    });
    return formattedParagraphsArray.join("\n\n");
  }
  
export { formatText };