---
tags:
- network_access_control_rogue_access_point
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.1 Netzzugangskontrolle
stmt_target_object_category: Interne Netzsegmente
stmt_modal_verb: SOLLTE
stmt_action_word: authentifizieren
stmt_documentation: Konfigurationshistorie
result_reference: Zugriff
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.1 - Netzzugangskontrolle
> [!example]- Tags:> [[tags_Network Access Control|Network Access Control]]> [[tags_Rogue Access Point|Rogue Access Point]]
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

> [!example]- Untergeordnete Controls
> [ARCH.4.1.1 Dynamische Netzzugangskontrolle](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.4.1.1%20Dynamische%20Netzzugangskontrolle.md)> [ARCH.4.1.2 Quarantäne](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.4.1.2%20Quarantäne.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.4%20Zugangsbeschränkungen.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Interne Netzsegmente](target_object_categories_Interne Netzsegmente_8ef347e7-ea3f-4624-b0f3-2af728443301) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | den Zugriff von IT-Systemen auf das Netzsegment | im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements | [authentifizieren](action_words_authentifizieren_8e423108-c6dd-41fd-8104-e9221bd9d085) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Interne Netzsegmente SOLLTE den Zugriff von IT-Systemen auf das Netzsegment im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements authentifizieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zugriff](result_Zugriff_00000000-0000-0000-0000-000000000000) | Mit Zugriff wird die Nutzung von Informationen oder Daten bezeichnet. Über Zugriffsberechtigungen wird geregelt, welche Personen im Rahmen ihrer Funktionen oder welche IT-Anwendungen bevollmächtigt sind, Informationen, Daten oder auch IT-Anwendungen, zu nutzen oder Transaktionen auszuführen. |

> [!info]- Guidance
>Unautorisierte Systeme könnten Ausgangspunkt von Angriffen sein oder zu unbeabsichtigten Störungen im Netz führen. Netzwerkzugangskontrolle (Network Access Control, NAC) bietet eine wirksame Möglichkeit, den Zugriff auf Netzwerke kontrolliert zu steuern, insbesondere in schützenswerten Bereichen wie Management-Netzen, Produktionssystemen oder Forschungsumgebungen. Die Auswahl der Netzbereiche für die Netzzugangskontrolle richtet sich nach dem Schutzbedarf oder Risikoprofil. Dabei empfiehlt sich zu dokumentieren, welche Zonen mit NAC abgesichert werden und warum andere bewusst nicht berücksichtigt werden (z.B. aufgrund technischer Einschränkungen oder fehlender Relevanz). Die Umsetzung kann (1) auf Zertifikaten basieren (X.509, EAP‑TLS or mTLS), (2) auf Zugangskonten basieren (IEEE 802.1X, RADIUS), (3) auf dynamischen Prüfungen basieren (z.B. Sicherheitspatches). Eine Authentifizierung, die nur auf MAC-Adressen basiert, gilt dagegen nicht mehr als zeitgemäß, da MAC-Adressen sehr leicht ausgelesen und auf Systemen eingestellt werden könnten und so unberechtigte IT-Systeme zu leicht auch Zugang erhalten. Wenn Systeme die Netzzugangskontrolle nicht oder nur unzureichend unterstützen, ist für solche Systeme anstelle einer Netzzugangskontrolle die Nutzung eines eigenen Netzsegmentes empfehlenswert. Für die Verbindung zwischen RADIUS-Servern, Switches und Verzeichnisdiensten kommen Protokolle wie RadSec, IPsec oder LDAPS in Betracht. Die Verwendung nur einer einzigen Serverkonfigurationen (z.B. ein gemeinsamer RADIUS-Server für NAC und VPN) führt zu Komplexität und Angriffspunkten. Daher werden getrennte Systeme empfohlen. Dies gilt insbesondere bei unterschiedlichen Schutzklassen im LAN/WLAN oder Büro-/Produktionsnetz. Bei WLANs kann die Umsetzung in größeren Umgebungen mittels 802.1X (WPA3-Enterprise) und an kleineren Zugangspunkten oder Gastnetzen durch SAE (WPA3-Personal) erfolgen. Da es sich um eine automatisierte Sicherheitsrichtlinie handelt, ist hier auch die Anforderung zur Überwachung solcher Richtlinien anwendbar. Überwachungskriterien sind hier z.B. die Erreichbarkeit des RADIUS-Servers, die Antwortzeiten, die Last auf Access-Switches und andere Metriken. Für die Überwachung der Integrität ist insbesondere die Authentifizierung oder deren Fehlschlag relevant, z.B. viele abgelehnte Authentisierungen, plötzliche Deaktivierung eines Supplicants. Durch synthetische Anfragen an Testkonten kann die gesamte Authentisierungskette regelmäßig geprüft werden. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9ec9762e-c115-4e56-8b45-b88a872f47ce |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 9ec9762e-c115-4e56-8b45-b88a872f47ce |

> [!info]- Links> > related: [DET.4.4 Änderungen an Sicherheitsrichtlinien](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.4%20Änderungen%20an%20Sicherheitsrichtlinien.md)> > related: [DET.3.1.8 Privilegierte Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.8%20Privilegierte%20Ereignisse.md)
