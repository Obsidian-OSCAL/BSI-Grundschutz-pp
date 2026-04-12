---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.12 Software-definierte Verbindungen
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
stmt_target_object_category: Netze
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: IT-Betriebskonzept
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.12 - Software-definierte Verbindungen
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | Verbindungen zwischen IT-Systemen | anhand dynamischer Kriterien | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze KANN Verbindungen zwischen IT-Systemen anhand dynamischer Kriterien einschränken.</span>

> [!info]- Guidance
>Software-definierte Verbindungen sind logisch kontrollierte Netzwerkpfade, deren Zugriffsbedingungen nicht statisch hinterlegt, sondern anhand aktueller Merkmale bewertet werden; dynamische Kriterien meint dabei festgelegte Filterregeln, deren Werte situativ ermittelt werden, etwa über „context attributes“ oder „dynamic policies“. Solche Merkmale können als contextual signals wie momentane Auslastung, Gerätezustand („device posture“) oder zeitliche Rahmenbedingungen interpretiert werden, während die zugrunde liegenden Regeln unverändert bleiben und nur ihre Bewertung variiert. Dies kann helfen, laterale Bewegungen einzudämmen und kann gleichzeitig unerwartete Zugriffe in veränderten Betriebszuständen abblocken; ein Angriff, der unentdeckt Systeme durchqueren könnte, oder ein kompromittierter Client, der außerhalb definierter Parameter agiert, könnte dadurch abgewehrt werden. Praktisch kann dies über segmentierende „Software-Defined Networking“-Mechanismen, kontextabhängige Firewall-Policies oder adaptive Access-Control-Engines erfolgen. Eine angemessene Absicherung ist hier zu verstehen als ein Bündel verlässlicher Signale, die den Zustand eines Endpunkts oder Dienstes authentisch widerspiegeln. Als Varianten kommen etwa kontextabhängige SDN-Flows, regelbasierte Mikrosegmentierung über Identity-Tags oder der Einsatz von Policy-Engines infrage, die ihre Entscheidungen anhand dynamisch erfasster Werte wie Geräteintegrität, Standort oder Risikobewertung fällen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e1e4bec9-8dc4-4062-a025-6ea70eedb9c9 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | e1e4bec9-8dc4-4062-a025-6ea70eedb9c9 |
