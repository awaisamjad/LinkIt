import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { supabase } }) => {
    console.log((await supabase.auth.getUser()).data)
    // const { data, error } = await supabase.auth.getUser();
    // if (!error) {
    //     if (data.user !== null) {
    //         return {
    //             isAuthenticated: true
    //         };
    //     }
    //     else {
    //         return {
    //             isAuthenticated: false
    //         }
    //     }
    // } else {
    //     console.log("Error getting user : ", error)
    //     return {
    //         isAuthenticated: false
    //     }
    // }

}) satisfies PageServerLoad;