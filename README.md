# a0 - A command line utility to manage `text/number/email/password/address/note` with Alias to easy recall & copy to clipboard.

Let me explain what is **a 0 something**?

The **a** command maps an **alias** to the **text** that persists on disk; Also copy the **text** to **clipboard**. This command takes max two arguments. First arugument for **alias** and second for **text**.
```bash
a 0 something  # Command `a` maps alias `0` with text `something`; Added text to clipboard.
# alias: 0
# text: something
```
Once alias is assignned to the text, **a** just need **alias** to read associated **text** from disk; Also copy same **text** to **clipboard**.
```bash
a 0  # Command `a` returns text  `something` as it was mapped with alias `0` earlier; Added text to clipboard.
# alias: 0
# text: something
```
Store once and use again by refilling clipboard through executing this command. 

```bash
a 0  # something
# alias: 0
# text: something
```

## CLI

You can use it directly from the CLI:

```bash
deno run --allow-run --allow-read --allow-write https://deno.land/x/a0/cli.ts <alias> <text>
# alias: <alias>
# text: <text>

deno run --allow-run --allow-read --allow-write https://deno.land/x/a0/cli.ts <alias>
# alias: <alias>
# text: <text>
```

You can also install it globally using the following:

```bash
deno install --allow-run --allow-read --allow-write -n a https://deno.land/x/a0/cli.ts
```

Then, the package is available to run:

```bash
a <alias> <text>
# alias: <alias>
# text: <text>

a <alias>
# alias: <alias>
# text: <text>

a 0 something
# alias: 0
# text: something

a 0 
# alias: 0
# text: something
```

### few more examples to add & retrive text by using alias
```bash
a email amitkumar.php@gmail.com
# alias: email
# text: amitkumar.php@gmail.com

a email
# alias: email
# text: amitkumar.php@gmail.com

a p pas$w0Rd
# alias: p
# text: pas$w0Rd

a p
# alias: p
# text: pas$w0Rd

a pass C0mpleXp@s$w0Rd
# alias: pass
# text: C0mpleXp@s$w0Rd

a pass
# alias: pass
# text: C0mpleXp@s$w0Rd

a li Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
# alias: li
# text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

a li  
# alias: li
# text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

a t1 task one summary
# alias: t1
# text: task one summary

a t1
# alias: t1
# text: task one summary

a add 1, Man Singh Rd, South Block, Man Singh Road Area, New Delhi, Delhi 110001
# alias: add
# text: 1, Man Singh Rd, South Block, Man Singh Road Area, New Delhi, Delhi 110001

a add 
# alias: add
# text: 1, Man Singh Rd, South Block, Man Singh Road Area, New Delhi, Delhi 110001

a a Rajpath, India Gate, New Delhi, Delhi 110001
# alias: a
# text: Rajpath, India Gate, New Delhi, Delhi 110001

a a
# alias: a
# text: Rajpath, India Gate, New Delhi, Delhi 110001

a 1 user1@gmail.com  
# alias: 1
# text: user1@gmail.com

a 1
# alias: 1
# text: user1@gmail.com

a 1p user1Password
# alias: 1p
# text: user1Password

a 1p
# alias: 1p
# text: user1Password
```

### examples to update text for existing alias
```bash
a 1p changedUser1Password
# alias: 1p
# text: changedUser1Password

a 1p
# alias: 1p
# text: changedUser1Password
```

### Configuration

Required permissions:

1. `--allow-run`
2. `--allow-read`
3. `--allow-write`


## Notes

Tested only for MAC.
