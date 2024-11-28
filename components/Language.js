
import React, { useEffect, useRef, useState } from "react";

const Language = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState("en");
  const googleTranslateRef = useRef(null);
  const allowedLanguages = ["en", "am", "ar", "fr", "ti", "om" , "aa", "so", "es", "zh", "sw"];


  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    if (window.google && window.google.translate) {
      // If the Google Translate API is already available, initialize it directly
      setTimeout(initializeGoogleTranslate, 1000);
    } else {
      // Otherwise, add a callback function for initialization
      script.addEventListener("load", () => {
        setTimeout(initializeGoogleTranslate, 1000); // Adjust the delay as needed
      });
      script.onerror = () => {
        console.error("Failed to load the Google Translate script.");
      };
      document.body.appendChild(script);
    }

    function initializeGoogleTranslate() {
      if (window.google && window.google.translate) {
        const { TranslateElement } = window.google.translate;

        if (googleTranslateRef.current) {
          googleTranslateRef.current.showBanner(false);
        }

        googleTranslateRef.current = new TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: allowedLanguages.join(","),
            layout:
              TranslateElement.InlineLayout &&
              TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            onLanguageChanged: onLanguageChange,
          },
          "google_translate_element"
        );
      } else {
        console.warn("Google Translate script not fully loaded yet.");
      }
    }

    return () => {
      // Cleanup or remove the script if needed when the component unmounts.
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [onLanguageChange]);

  return (
    <div key="google-translate-element">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default Language;
