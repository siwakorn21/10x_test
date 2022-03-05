export declare const DatabaseProviders: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
}[];
