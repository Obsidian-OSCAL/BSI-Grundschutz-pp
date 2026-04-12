---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.1 Blockieren anfälliger Netzprotokolle
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: blockieren
stmt_documentation: Firewallregeln
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.1 - Blockieren anfälliger Netzprotokolle
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | anfällige Netzwerkprotokolle |  | [blockieren](action_words_blockieren_2abccead-8fc1-4f04-af4b-8c5ff796bd67) | [Firewallregeln](documentation_guidelines_Firewallregeln) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze SOLLTE anfällige Netzwerkprotokolle blockieren.</span>

> [!info]- Guidance
>Anfällig sind Netzprotokolle, wenn sie veraltete oder gar keine Algorithmen zur Verschlüsselung oder Integritätsprüfung verwenden. Hierzu gehören Protokolle wie Telnet, SMB v1, SNMP v1/v2c. Für aktuelle Verschlüsselungsalgorithmen siehe BSI TR 02102.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b4977fc1-727c-41c8-a397-f84ba68fc11a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b4977fc1-727c-41c8-a397-f84ba68fc11a |
