---
tags:
- produktbeschreibung
- konf92-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.9.2 Begrenzung der Rechenleistung
stmt_target_object_category: Hostsysteme
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.9.2 - Begrenzung der Rechenleistung
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.9 Verfügbarkeit von Ressourcen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.9%20Verfügbarkeit%20von%20Ressourcen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Verfügbarkeit von Ressourcen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.9%20Verfügbarkeit%20von%20Ressourcen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Hostsysteme](target_object_categories_Hostsysteme_19c946fc-e991-44ee-87c5-7bbe5d5aaf55) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die zur Verfügung stehende Rechenleistung | anhand von {{Schwellwerten}} | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Hostsysteme KANN die zur Verfügung stehende Rechenleistung anhand von {{ insert: param, konf.9.2-prm1 }} einschränken.</span>

> [!info]- Guidance
>Dies kann durch eine Beschränkung der Anzahl verwendeter Rechenkerne, der Rechenleistung pro Rechenkern oder durch eine indirekte Beschränkung (z.B. eine begrenzte Menge an Anfragen oder Eingabetoken in Anwendungen) umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3b0eb166-07b9-4b51-a1f5-75513b28015c |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 3b0eb166-07b9-4b51-a1f5-75513b28015c |
