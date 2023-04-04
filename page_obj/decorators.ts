// import { allure } from "@allure-playwright"; // export AllureInterface from the config file with onPrepare etc.
//
// export function step(description: string): (...args: any[]) => TypedPropertyDescriptor<any> {
//     return (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> => {
//         const original = descriptor.value;
//         descriptor.value = function(...args: any[]) {
//             // todo you can inject args into the description here if needed
//             return allure.step(description, () => {
//                 console.log(`Running step: ${description}`);
//                 return original.apply(this, args);
//             });
//         };
//         return descriptor;
//     };
// }