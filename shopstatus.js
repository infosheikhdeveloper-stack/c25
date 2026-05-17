async function checkShopStatus(){

  const { data } = await supabaseClient
    .from("shop_status")
    .select("*")
    .eq("id",1)
    .single();

  const screen = document.getElementById("appClosedScreen");

  if(data?.status === "closed"){

    screen.classList.add("show");

    // LOCK APP (NO SCROLL + NO CLICK)
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    screen.style.pointerEvents = "all";

    return false;
  }

  // OPEN APP
  screen.classList.remove("show");
  document.body.style.overflow = "auto";
  document.body.style.pointerEvents = "auto";

  return true;
}