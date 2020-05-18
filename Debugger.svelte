<script>
  import formatHighlight from "json-format-highlight";
  import { onMount } from "svelte";

  export let data = {};
  export let indent = 2; // spaces

  // formatHighlight - Define your exclusive color scheme
  export let colorOptions = {
    keyColor: "dimgray",
    numberColor: "lightskyblue",
    stringColor: "lightcoral",
    trueColor: "lightseagreen",
    falseColor: "#f66578",
    nullColor: "cornflowerblue"
  };

  let isPropsValid = false;

  onMount(() => {
    init();
  });

  const validateProp = prop => {
    if (typeof prop === "object") {
      return !!Object.keys(prop).length;
    } else if (typeof prop === "number") {
      return prop > 0;
    }

    throw new Error("ValidateProp param expected to be an object");
  };

  const init = () => {
    isPropsValid = validateProp(data) && validateProp(indent);
  };

  $: formattedHighlight = formatHighlight(JSON.stringify(data, null, indent), colorOptions);
</script>

<style>
  pre {
    position: fixed;
    bottom: 15px;
    left: 1%;

    box-sizing: border-box;

    width: 98%;
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;

    border: 2px solid #131313;
    background-color: #efefef;
  }
  pre code {
    font-size: 12px;
    line-height: 20px;
  }
</style>

{#if isPropsValid}
  <pre>
    <code>
      {@html formattedHighlight}
    </code>
  </pre>
{/if}
