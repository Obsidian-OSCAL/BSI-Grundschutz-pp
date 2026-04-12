---
tags:
- secure_compiling_practices
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.7 Deterministischer Binärcode
stmt_target_object_category: Anwendungen
stmt_modal_verb: KANN
stmt_action_word: dokumentieren
stmt_documentation: Entwicklungsdokumentation
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.7 - Deterministischer Binärcode
Tag: [[tags_Secure Compiling Practices|Secure Compiling Practices]]
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)*<br> *  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *</div> | [Entwicklung](practices_Entwicklung_108b65aa-5964-49d7-b9eb-dc8946a923ca) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine reproduzierbare Vorgehensweise zur Erstellung eines bestimmten Binärcodes aus dem Quellcode |  | [dokumentieren](action_words_dokumentieren_1ed72769-e05f-4a97-ad2e-99a70f1480e8) | [Entwicklungsdokumentation](documentation_guidelines_Entwicklungsdokumentation) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Entwicklung für Anwendungen KANN eine reproduzierbare Vorgehensweise zur Erstellung eines bestimmten Binärcodes aus dem Quellcode dokumentieren.</span>

> [!info]- Guidance
>Ein bestimmter Binärcode meint hier eine reproduzierbare Anwendung (Reproducible builds). Das bedeutet, dass jeder, der denselben Quellcode und dieselbe Build-Umgebung verwendet, bitweise identische Binärdateien erstellt, was die Integrität der Software gegen Manipulationen oder Malware sichert. Dies geschieht durch die genaue Beschreibung der Build-Umgebung und die Vermeidung von zufälligen Faktoren wie Zeitstempeln, die sich auf die erzeugten Artefakte auswirken könnten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 973bc793-3acb-4d77-9b7e-9599090c3779 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 973bc793-3acb-4d77-9b7e-9599090c3779 |
