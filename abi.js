!function(e)
{
    if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();
    else if("function"==typeof define&&define.amd)define([],e);
    else
    {
        ("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).detectEthereumProvider=e()
    }
}
((function(){return function({mustBeMetaMask:e=!1,silent:t=!1,timeout:o=3e3}={})
{!function()
    {if("boolean"!=typeof e)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof o)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let n=!1;return new Promise(i=>{function r(){if(n)return;n=!0,window.removeEventListener("ethereum#initialized",r);const{ethereum:o}=window;if(!o||e&&!o.isMetaMask){const n=e&&o?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!t&&console.error("@metamask/detect-provider:",n),i(null)}else i(o)}window.ethereum?r():(window.addEventListener("ethereum#initialized",r,{once:!0}),setTimeout(()=>{r()},o))})}}));