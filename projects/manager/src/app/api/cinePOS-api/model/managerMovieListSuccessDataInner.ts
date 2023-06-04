/**
 * CinePOS_BackEnd
 * CinePOS 後端API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ManagerMovieListSuccessDataInner { 
    /**
     * 電影編號
     */
    _id?: string;
    /**
     * 上映狀態文字
     */
    statusName?: number;
    /**
     * 電影名稱
     */
    title?: string;
    /**
     * 劇情類型文字
     */
    genreName?: Array<string>;
    /**
     * 分級制度文字
     */
    rateName?: string;
    /**
     * 發行日期
     */
    releaseDate?: any;
    /**
     * 片長
     */
    runtime:number;
    /**
     * 支援設備文字
     */
    provideVersionName?: Array<string>;
}