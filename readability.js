// Register for the available events.
// Using capture is not necessary here because the available event bubbles.
safari.application.addEventListener("available", handleAvailableEvent, false);
 
function handleAvailableEvent(event)
{
    // If the target is not Reader, return early.
    var isForReader = event.target instanceof SafariReader;
    if (!isForReader)
        return;
 
    // If Reader is not available or is already visible, return early.
    if (!event.target.available || event.target.visible)
        return;
 
    // Enter Reader.
    event.target.enter();
}
