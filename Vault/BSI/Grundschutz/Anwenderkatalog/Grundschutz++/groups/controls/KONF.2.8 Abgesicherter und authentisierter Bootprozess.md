---
tags:
- cryptography_produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.2.8 Abgesicherter und authentisierter Bootprozess
stmt_target_object_category: IT-Systeme
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.2.8 - Abgesicherter und authentisierter Bootprozess
> [!example]- Tags:> [[tags_Cryptography|Cryptography]]> [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.2 Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Konfiguration von Systemen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.2%20Konfiguration%20von%20Systemen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | einen abgesicherten und authentisierten Bootprozess |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme KANN einen abgesicherten und authentisierten Bootprozess aktivieren.</span>

> [!info]- Guidance
>Dies empfiehlt sich für eingebettete Systeme (Embedded Systems), indem z.B. der Bootloader die Integrität des Betriebssystems überprüft und es nur dann lädt, wenn es als korrekt eingestuft wurde. Ebenso empfiehlt es sich ein mehrstufiges Boot-Konzept mit kryptographisch sicherer Überprüfung der Einzelschritte zu realisieren, sichere Hardware-Vertrauensanker zu verwenden, bei ARM & UEFI-basierten Systemem jeweils (ARM) Secure Boot zu nutzen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8d460d82-f7db-42c5-b213-625df4381ff3 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 8d460d82-f7db-42c5-b213-625df4381ff3 |
