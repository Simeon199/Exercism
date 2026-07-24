/// <reference path="./global.d.ts" />

// eslint-disable-next-line no-unused-vars
import { error } from "node:console";
// eslint-disable-next-line no-unused-vars
import { text } from "node:stream/consumers";

// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line no-shadow
  free(text) {
    // @ts-ignore
    return this.api.fetch(text).then(
      function (result){
          return result.translation;
      });
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if(texts.length <= 0){
      return Promise.reject(new BatchIsEmpty());
    }
    // eslint-disable-next-line no-shadow
    return Promise.all(texts.map((text) => {
      return this.free(text)
    }));
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  // eslint-disable-next-line no-shadow
  request(text) {
    const myPromise = () => {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-shadow
        this.api.request(text, (error) => {
          if(error){
            reject(error);
          } else {
            resolve();
          }
        });
      });
    }
    return myPromise().catch(myPromise).catch(myPromise);
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line no-shadow
  premium(text, minimumQuality) {
    return this.api.fetch(text)
    .catch(() => {
      return this.request(text).then(() => {
        return this.api.fetch(text);
      });
    })
    .then((result) => {
      if(result.quality < minimumQuality){
        throw new QualityThresholdNotMet();
      }
      return result.translation
    });
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  // eslint-disable-next-line no-shadow
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
