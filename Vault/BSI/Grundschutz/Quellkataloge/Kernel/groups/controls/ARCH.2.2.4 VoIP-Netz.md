---
tags:
- lateral_movement_separation_of_concerns
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.4 VoIP-Netz
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
stmt_target_object_category: Netze
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: Netzplan
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.4 - VoIP-Netz
> [!example]- Tags:> [[tags_Lateral Movement|Lateral Movement]]> [[tags_Separation of Concerns|Separation of Concerns]]
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | Verbindungen zwischen Daten- und VoIP-Systemen |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Netzplan](documentation_guidelines_Netzplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze KANN Verbindungen zwischen Daten- und VoIP-Systemen einschränken.</span>

> [!info]- Guidance
>Werden sowohl Telefonie als auch andere Daten über dasselbe Netz geführt, so könnte dies bei einem Netzausfall dazu führen, dass keine Kommunikation mehr möglich ist, auch nicht zur Meldung oder Behebung der Störung. Die Wahrscheinlichkeit kann durch getrennt betriebene Voice- und Datennetze verringert werden. Für weitere Details siehe „Kompendium für organisationsinterne Telekommunikationssysteme mit erhöhtem Schutzbedarf".

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 02cac8a8-60e3-481d-96bf-3fa484afea78 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 02cac8a8-60e3-481d-96bf-3fa484afea78 |
