---
tags: Secure_Compiling_Practices
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.7 Deterministischer Binärcode
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.7 - Deterministischer Binärcode
Tags: "[Secure Compiling Practices](tags_Secure Compiling Practices)"
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *** | Anwendungen | KANN | eine reproduzierbare Vorgehensweise zur Erstellung eines bestimmten Binärcodes aus dem Quellcode |  | dokumentieren | Entwicklungsdokumentation | >Entwicklung für Anwendungen KANN eine reproduzierbare Vorgehensweise zur Erstellung eines bestimmten Binärcodes aus dem Quellcode dokumentieren.

> [!info]- Guidance
>Ein bestimmter Binärcode meint hier eine reproduzierbare Anwendung (Reproducible builds). Das bedeutet, dass jeder, der denselben Quellcode und dieselbe Build-Umgebung verwendet, bitweise identische Binärdateien erstellt, was die Integrität der Software gegen Manipulationen oder Malware sichert. Dies geschieht durch die genaue Beschreibung der Build-Umgebung und die Vermeidung von zufälligen Faktoren wie Zeitstempeln, die sich auf die erzeugten Artefakte auswirken könnten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 973bc793-3acb-4d77-9b7e-9599090c3779 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 973bc793-3acb-4d77-9b7e-9599090c3779 |
