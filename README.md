# angular-template-tag
Use ng-templates inside of &lt;template>

Now instead of 
```HTML
<script type="text/ng-template" id="file.html">
  ...
</script>
```

you can do

```HTML
<template url="file.html">
  ...
</template>
```
