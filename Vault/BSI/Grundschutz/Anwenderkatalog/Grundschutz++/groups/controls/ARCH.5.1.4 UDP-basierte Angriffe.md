---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.4 UDP-basierte Angriffe
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: blockieren
stmt_documentation: Firewallregeln
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.4 - UDP-basierte Angriffe
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | bekannte UDP-basierte Angriffsmethoden |  | [blockieren](action_words_blockieren_2abccead-8fc1-4f04-af4b-8c5ff796bd67) | [Firewallregeln](documentation_guidelines_Firewallregeln) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze SOLLTE bekannte UDP-basierte Angriffsmethoden blockieren.</span>

> [!info]- Guidance
>UDP-basierte Angriffsmethoden (englisch: known UDP-based attack vectors) sind hierbei Techniken zu verstehen, die das User Datagram Protocol (UDP) ausnutzen. UDP ist das am meisten verwendete Protokoll für die Übertragung von Datenstreams. Aufgrund seiner verbindungslosen Eigenschaft ermöglicht UDP eine sehr schnelle Datenübertragung und wird daher oft für zeitkritische Anwendungen wie Videostreaming, VoIP oder DNS-Anfragen verwendet. Genau diese Eigenschaft macht es jedoch anfällig für Missbrauch, da die Absenderadresse leicht gefälscht werden kann (IP-Spoofing).  Beispiele für Angriffe sind Sequence Number Guessing, DHCP Starvation und UDP Hole-Punching Abuse. Die Anforderung kann durch Blockieren solcher Verbindungen oder nur bestimmter Mechanismen umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d2b4e523-ee05-47ae-8d5e-95f30015dce2 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | d2b4e523-ee05-47ae-8d5e-95f30015dce2 |
