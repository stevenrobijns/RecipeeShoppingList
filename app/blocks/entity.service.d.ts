export declare class EntityService {
    clone: (source: {}) => any;
    merge: (target: any, ...sources: any[]) => any;
    propertiesDiffer: (entityA: {}, entityB: {}) => string;
}
